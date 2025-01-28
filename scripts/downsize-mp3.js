const fs = require('fs').promises;
const path = require('path');
const { spawn } = require('child_process');

const INPUT_DIR = path.resolve(__dirname, '../assets/playlists');
const OUTPUT_DIR = path.resolve(__dirname, '../assets/playlists-mp3');

async function downsizeMp3(file) {
  const relativePath = path.relative(INPUT_DIR, path.dirname(file));
  const outputDir = path.join(OUTPUT_DIR, relativePath);
  const fileName = path.basename(file, path.extname(file));
  const outputFile = path.join(outputDir, `${fileName}.mp3`);

  await fs.mkdir(outputDir, { recursive: true });

  console.log(`Converting: ${file} -> ${outputFile}`);
  
  return new Promise((resolve, reject) => {
      const ffmpeg = spawn('ffmpeg', [
          '-i', file,
          '-codec:a', 'libmp3lame',
          '-b:a', '128k',
          '-y',
          outputFile
      ]);

      ffmpeg.stderr.on('data', (data) => {
          console.log(`${data}`);
      });

      ffmpeg.on('close', (code) => {
          if (code === 0) {
              console.log(`Completed: ${fileName}`);
              resolve();
          } else {
              reject(new Error(`FFmpeg process exited with code ${code}`));
          }
      });

      ffmpeg.on('error', (err) => {
          reject(new Error(`Failed to start FFmpeg process: ${err.message}`));
      });
  });
}

async function main() {
    try {
        // すべてのwav,mp3ファイルを再帰的に検索
        const findAudioFiles = async (dir) => {
            const files = await fs.readdir(dir, { withFileTypes: true });
            const audioFiles = [];

            for (const file of files) {
                const fullPath = path.join(dir, file.name);
                if (file.isDirectory()) {
                    audioFiles.push(...await findAudioFiles(fullPath));
                } else if (file.name.endsWith('.wav') || file.name.endsWith('.mp3')) {
                    audioFiles.push(fullPath);
                }
            }
            return audioFiles;
        };

        const audioFiles = await findAudioFiles(INPUT_DIR);
        
        // 順次変換を実行
        for (const file of audioFiles) {
            await downsizeMp3(file);
        }

        console.log('downsize-mp3.js: Done');
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

main();
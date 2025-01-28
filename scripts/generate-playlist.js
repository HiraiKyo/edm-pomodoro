const fs = require('fs');
const path = require('path');
const mm = require('music-metadata');

const ASSETS_DIR = path.join(__dirname, '../assets');
const PLAYLISTS_DIR = path.join(ASSETS_DIR, 'playlists-mp3');
const OUTPUT_FILE = path.join(__dirname, "../data/generated-playlists.ts");

// Utility functions
const sanitizeFilename = (filename) => {
  return filename.replace(/\.[^/.]+$/, ''); // Remove file extension
};

const generateId = (str) => {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '-');
};

const extractTrackTitle = (filename) => {
  // Remove artist name if present
  const parts = filename.split(' - ');
  if (parts.length > 1) {
    // Remove any additional info in brackets
    return parts[1].replace(/\[.*?\]/g, '').trim();
  }
  return sanitizeFilename(filename);
};

async function getAudioMetadata(filePath) {
  try {
    const metadata = await mm.parseFile(filePath);
    // Try to get BPM from metadata, default to 120 if not found
    return metadata.common.bpm || 128;
  } catch (error) {
    console.warn(`Could not read metadata for ${filePath}, using default BPM`);
    return 128;
  }
}

async function generatePlaylists() {
  const playlists = [];

  // Read playlist directories
  const playlistDirs = fs.readdirSync(PLAYLISTS_DIR);

  for (const playlistDir of playlistDirs) {
    const playlistPath = path.join(PLAYLISTS_DIR, playlistDir);

    // Skip if not a directory
    if (!fs.statSync(playlistPath).isDirectory()) continue;

    const tracks = [];
    const files = fs.readdirSync(playlistPath);

    // Process audio files
    for (const file of files) {
      if (file.match(/\.(wav|mp3)$/i)) {
        const filePath = path.join(playlistPath, file);
        const bpm = await getAudioMetadata(filePath);

        const track = {
          id: generateId(sanitizeFilename(file)),
          title: extractTrackTitle(sanitizeFilename(file)),
          // AVPlaybackSource形式を変更
          source: `../assets/playlists/${playlistDir}/${file}`,
          bpm: bpm
        };
        tracks.push(track);
      }
    }

    // Create playlist object
    const playlist = {
      id: generateId(playlistDir),
      title: playlistDir,
      tracks: tracks
    };

    playlists.push(playlist);
  }

  // Generate TypeScript file
  const fileContent = `\
// This file is auto-generated. Do not edit manually.
import { Playlist } from '@/store/reducers/playlistSlice';
import { Track } from '@/store/reducers/edmSlice';

export const playlists: Playlist[] = ${JSON.stringify(playlists, null, 2)
    .replace(/"source": "([^"]+)"/g, 'source: require("$1")')};
`;

  // Write to file
  fs.writeFileSync(OUTPUT_FILE, fileContent);
  console.log(`Generated playlist file at ${OUTPUT_FILE}`);
}

// Run the generator
generatePlaylists().catch(console.error);
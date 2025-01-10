import { StyleSheet, useColorScheme } from 'react-native';
import TimerControls from '@/components/Timer/TimerControls';
import TimerDisplay from '@/components/Timer/TimerDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setMode, startTimer, stopTimer } from '@/store/reducers/timerSlice';
import EdmDisplay from '@/components/SongPlayer/EdmDisplay';
import { ThemedView } from '@/components/ThemedView';
import { playlists } from '@/data/generated-playlists';
import { setPlaylist } from '@/store/reducers/playlistSlice';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import SettingLink from '@/components/SettingLink';

export default () => {
  const colorScheme = useColorScheme();

  const dispatch = useDispatch();
  const { playlist } = useSelector((state: RootState) => state.playlist);
  const { timeLeft, isRunning, mode } = useSelector((state: RootState) => state.timer);
  const { currentTrack } = useSelector((state: RootState) => state.edm);

  const handleStart = () => {
    if (!playlist) {
      const randomIndex = Math.floor(Math.random() * playlists.length);
      dispatch(setPlaylist(playlists[randomIndex]));
    }
    dispatch(startTimer());
  }

  const handleStop = () => {
    dispatch(stopTimer());
    dispatch(setMode("work"));
  }

  return (
    <ThemedView style={styles.container}>
      <SettingLink />
      <ThemedView>
        <EdmDisplay playlistTitle={playlist?.title ?? "No Playlist"} trackTitle={currentTrack?.title ?? "No Title"} bpm={currentTrack?.bpm ?? 128} />
        <TimerDisplay minutes={Math.floor(timeLeft / 60)} seconds={timeLeft % 60} phase={mode === "work" ? "focus" : "break"} />
        <TimerControls
          isRunning={isRunning}
          onStart={handleStart}
          onStop={handleStop}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  settingsLink: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
});

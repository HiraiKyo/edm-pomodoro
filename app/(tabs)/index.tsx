import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import TimerControls from '@/components/Timer/TimerControls';
import TimerDisplay from '@/components/Timer/TimerDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { toggleTimer } from '@/store/reducers/timerSlice';
import EdmDisplay from '@/components/SongPlayer/EdmDisplay';

export default () => {
  const dispatch = useDispatch();
  const { timeLeft, isRunning, mode } = useSelector((state: RootState) => state.timer);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <EdmDisplay title="ArgoFox BPM 120 Sample" bpm={120} />
      <TimerDisplay minutes={Math.floor(timeLeft / 60)} seconds={timeLeft % 60} phase={mode === "work" ? "focus" : "break"} />
      <TimerControls
        isRunning={isRunning}
        onStart={() => dispatch(toggleTimer())}
        onStop={() => dispatch(toggleTimer())}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
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
});

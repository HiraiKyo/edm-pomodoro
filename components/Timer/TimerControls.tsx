import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  isRunning,
  onStart,
  onPause,
  onReset
}) => {
  return (
    <ThemedView style={styles.container}>
      {!isRunning ? (
        <IconSymbol
          name="play-circle"
          size={64}
          color="#4CAF50"
          onPress={onStart}
        />
      ) : (
        <IconSymbol
          name="pause-circle"
          size={64}
          color="#FFC107"
          onPress={onPause}
        />
      )}
      <IconSymbol
        name="refresh"
        size={48}
        color="#F44336"
        onPress={onReset}
        style={styles.resetButton}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  resetButton: {
    marginLeft: 20,
  }
});

export default TimerControls;
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  isRunning,
  onStart,
  onStop
}) => {
  return (
    <ThemedView style={styles.container}>
      {!isRunning ? (
        <TouchableOpacity onPress={onStart}>
          <IconSymbol
            name="play.circle"
            size={64}
            color="#4CAF50"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onStop}>
          <IconSymbol
            name="pause.circle"
            size={64}
            color="#FFC107"
          />
        </TouchableOpacity>
      )}
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
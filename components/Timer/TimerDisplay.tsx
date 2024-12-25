import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

interface TimerDisplayProps {
  minutes: number;
  seconds: number;
  phase: 'focus' | 'break' | 'longBreak';
}

const TimerDisplay = ({ minutes, seconds, phase }: TimerDisplayProps) => {
  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  const getPhaseColor = () => {
    switch (phase) {
      case 'focus':
        return '#FF4C4C';
      case 'break':
        return '#4CAF50';
      case 'longBreak':
        return '#2196F3';
      default:
        return '#FF4C4C';
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={[styles.timerText, { color: getPhaseColor() }]}>
        {`${formatTime(minutes)}:${formatTime(seconds)}`}
      </ThemedText>
      <ThemedText style={[styles.phaseText, { color: getPhaseColor() }]}>
        {phase.charAt(0).toUpperCase() + phase.slice(1)}
      </ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  timerText: {
    fontSize: 72,
    fontWeight: 'bold',
  },
  phaseText: {
    fontSize: 24,
    marginTop: 8,
  },
});

export default TimerDisplay;
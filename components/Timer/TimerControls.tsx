import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

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
  const { playlist } = useSelector((state: RootState) => state.playlist);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.actionContainer}>
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
      {!playlist && <ThemedText style={styles.description}>Playlist is randomly selected.</ThemedText>}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 8
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  resetButton: {
    marginLeft: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 20,
  },
});

export default TimerControls;
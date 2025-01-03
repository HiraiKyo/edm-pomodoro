import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { StyleSheet } from 'react-native';

interface EdmDisplayProps {
  playlistTitle: string;
  trackTitle: string;
  bpm: number;
};

export default ( { playlistTitle, trackTitle, bpm }: EdmDisplayProps ) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.edmTitle}>{playlistTitle}</ThemedText>
      <ThemedText style={styles.edmTitle}>{trackTitle}</ThemedText>
      <ThemedText style={styles.bpm}>{bpm}</ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 8,
  },
  edmTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bpm: {
    fontSize: 24,
    fontWeight: 'bold',
  },

});
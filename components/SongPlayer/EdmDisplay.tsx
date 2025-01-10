import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { StyleSheet } from 'react-native';
import { IconSymbol } from "../ui/IconSymbol";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { CommonStyle } from "@/constants/Styles";

interface EdmDisplayProps {
  playlistTitle: string;
  trackTitle: string;
  bpm: number;
};

export default ( { playlistTitle, trackTitle, bpm }: EdmDisplayProps ) => {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={[styles.container, { backgroundColor: Colors[colorScheme ?? "light"].backgroundsub }]}>
      <ThemedText style={[styles.edmDescription, { color: Colors[colorScheme ?? "light"].textsub}]}>Selected Playlist</ThemedText>
      <ThemedView style={styles.header}>
        <IconSymbol name="music.house" size={48} color={Colors[colorScheme ?? "light"].secondary} />
        <ThemedText style={[styles.playlistTitle, { color: Colors[colorScheme ?? "light"].secondary}]}>{playlistTitle}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.items}>
        <ThemedText style={[styles.edmDescription, { color: Colors[colorScheme ?? "light"].textsub}]}>Now playing</ThemedText>
        <ThemedText style={styles.edmTitle}>{trackTitle}</ThemedText>
        <ThemedText style={[styles.edmDescription, { color: Colors[colorScheme ?? "light"].textsub}]}>BPM</ThemedText>
        <ThemedText style={styles.bpm}>{bpm}</ThemedText>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 8,
    minWidth: '75%',
    padding: 16,
    borderRadius: 16,
  },
  header: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  playlistTitle: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  items: {
    alignItems: 'center',
    gap: 8,
  },
  edmTitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  edmDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  bpm: {
    fontSize: 24,
    fontWeight: 'bold',
  },

});
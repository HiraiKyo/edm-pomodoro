import { Playlist } from "@/store/reducers/playlistSlice";
import { ThemedView } from "../ThemedView";
import { FlashList } from "@shopify/flash-list";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";
import { router } from "expo-router";
import { CommonStyle } from "@/constants/Styles";
import { Colors } from "@/constants/Colors";

export default ({
  playlists,
  onSelect,
}: {
  playlists: Playlist[]
  onSelect: (playlist: Playlist) => void
}) => {
  const colorScheme = useColorScheme();

  const handleSelect = (playlist: Playlist) => {
    onSelect(playlist);
    router.push("/");
  };

  const renderItem = ({ item }: { item: Playlist }) => (
    <PlaylistListItem item={item} onSelect={handleSelect} />
  );

  return (
    <ThemedView style={[styles.container, { backgroundColor: Colors[colorScheme ?? "light"].background }]}>
      <FlashList
        data={playlists}
        renderItem={renderItem}
        estimatedItemSize={50}
        contentContainerStyle={styles.listContainer}
      />
    </ThemedView>
  );
}

const PlaylistListItem = ({
  item,
  onSelect
}: {
  item: Playlist;
  onSelect: (playlist: Playlist) => void;
}) => {
  const colorScheme = useColorScheme();

  return (
    <Pressable 
      onPress={() => onSelect(item)}
      style={({ pressed }) => [
        styles.pressable,
        { opacity: pressed ? 0.8 : 1 }
      ]}
    >
      <ThemedView style={[
        styles.playlistItem,
        {
          backgroundColor: Colors[colorScheme ?? "light"].backgroundsub,
          borderLeftColor: Colors[colorScheme ?? "light"].accent,
          borderLeftWidth: 4,
        }
      ]}>
        <ThemedView style={styles.leftContent}>
          <ThemedText style={styles.playlistName}>{item.title}</ThemedText>
          <ThemedView style={styles.tracks}>
            {item.tracks.map(track => (
                <ThemedText style={styles.playlistDescription}>{track.title}</ThemedText>
            ))}
          </ThemedView>
        </ThemedView>
        <ThemedView style={styles.rightContent}>
          <ThemedText style={styles.playlistDescription}>Tracks</ThemedText>
          <ThemedText style={[styles.playlistInfo, { color: Colors[colorScheme ?? "light"].accent }]}>{item.tracks.length}</ThemedText>
          <ThemedText style={styles.playlistDescription}>BPM</ThemedText>
          <ThemedText style={[styles.playlistInfo, { color: Colors[colorScheme ?? "light"].accent }]}>{item.tracks[0].bpm ?? 128}</ThemedText>
        </ThemedView>
        <ThemedText style={[styles.credit, { color: Colors[colorScheme ?? "light"].textsub }]}>
          by Argofox
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  listContainer: {
    padding: CommonStyle.spacing[1],
  },
  pressable: {
    marginHorizontal: CommonStyle.spacing[2],
    marginVertical: CommonStyle.spacing[1],
  },
  playlistItem: {
    position: "relative",
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: CommonStyle.spacing[2],
    borderRadius: 12,
    ...CommonStyle.shadow[1]
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  playlistName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: CommonStyle.spacing[1],
    letterSpacing: 1.5,
  },
  tracks: {
    marginVertical: CommonStyle.spacing[1],
  },
  playlistDescription: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
  },
  playlistInfo: {
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 1.5,
    fontWeight: '700',
  },
  credit: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    fontSize: 14,
    marginTop: CommonStyle.spacing[1],
  }
});
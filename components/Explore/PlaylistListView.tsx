import { Playlist } from "@/store/reducers/playlistSlice";
import { ThemedView } from "../ThemedView";
import { FlashList } from "@shopify/flash-list";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { router } from "expo-router";

export default ({
  playlists,
  onSelect,
}: {
  playlists: Playlist[]
  onSelect: (playlist: Playlist) => void
}) => {
  const handleSelect = (playlist: Playlist) => {
    onSelect(playlist);
    router.push("/");
  };

  const renderItem = ({ item }: { item: Playlist }) => (
    <PlaylistListItem item={item} onSelect={handleSelect} />
  );

  return (
    <ThemedView style={styles.container}>
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
  return (
    <Pressable onPress={() => onSelect(item)}>
      <ThemedView style={styles.playlistItem}>
        <ThemedView style={styles.leftContent}>
          <ThemedText style={styles.playlistName}>{item.title}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.rightContent}>
          <ThemedText style={styles.trackCount}>{item.tracks.length}</ThemedText>
        </ThemedView>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 16,
  },
  playlistItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  playlistName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  playlistDescription: {
    fontSize: 14,
  },
  trackCount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
import { PomoSession } from "@/store/reducers/historySlice";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default ({ sessions }: { sessions: PomoSession[]}) => {
  const colorScheme = useColorScheme();

  const renderItem = ({ item }: { item: PomoSession }) => (
    <HistoryListItem item={item} />
  );

  return (
    <ThemedView style={[styles.container, { backgroundColor: Colors[colorScheme ?? "light"].background }]}>
      <FlashList
        data={[...sessions].reverse()}
        renderItem={renderItem}
        estimatedItemSize={50}
      />
    </ThemedView>
  )
}

const HistoryListItem = ({ item }: { item: PomoSession }) => {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={[
      styles.item,
      {
        backgroundColor: Colors[colorScheme ?? "light"].backgroundsub,
        borderLeftColor: Colors[colorScheme ?? "light"].accent3,
      }
    ]}>
      <ThemedView style={styles.dateContainer}>
        <ThemedText style={styles.dateText}>{new Date(item.startAt).toLocaleString()}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.playlistContainer}>
        <ThemedText style={styles.playlistId}>{item.playlist?.id ?? "No record"}</ThemedText>
        <ThemedText style={styles.playlistTitle}>{item.playlist?.title ?? "No record"}</ThemedText>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  item: {
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    borderLeftWidth: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  dateContainer: {
    marginBottom: 8,
  },
  dateText: {
    fontSize: 12,
    color: '#888',
    letterSpacing: 0.5,
  },
  playlistContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playlistId: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00ffcc',
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
});
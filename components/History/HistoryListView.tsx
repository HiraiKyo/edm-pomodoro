import { PomoSession } from "@/store/reducers/historySlice"
import { ThemedText } from "../ThemedText"
import { ThemedView } from "../ThemedView"
import { FlashList, ListRenderItem } from "@shopify/flash-list"
import { StyleSheet } from "react-native"

export default ({ sessions }: { sessions: PomoSession[]}) => {
  return (
    <ThemedView style={styles.container}>
      <FlashList
        data={sessions}
        renderItem={HistoryListItem}
        estimatedItemSize={50}
        contentContainerStyle={styles.listContainer}
      />
    </ThemedView>
  )
}

const HistoryListItem: ListRenderItem<PomoSession> = ({ item }: { item: PomoSession }) => {
  return (
    <ThemedView style={styles.historyItem}>
      <ThemedView style={styles.leftContent}>
        <ThemedText style={styles.date}>{new Date(item.startAt).toLocaleDateString()}</ThemedText>
        <ThemedText style={styles.date}>{new Date(item.endAt).toLocaleDateString()}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.rightContent}>
        <ThemedText style={styles.edmTrack}>{item.edmTrackId}</ThemedText>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 16,
  },
  historyItem: {
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
  taskName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  edmTrack: {
    fontSize: 14,
    marginBottom: 4,
  },
  completed: {
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
  },
  incomplete: {
    backgroundColor: '#FFEBEE',
    color: '#C62828',
  },
});
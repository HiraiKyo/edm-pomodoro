import { PomoSession } from "@/store/reducers/historySlice"
import { ThemedText } from "../ThemedText"
import { ThemedView } from "../ThemedView"
import { FlashList, ListRenderItem } from "@shopify/flash-list"

export default ({ sessions }: { sessions: PomoSession[]}) => {
  return (
    <ThemedView>
      <FlashList
        data={sessions}
        renderItem={HistoryListItem}
        estimatedItemSize={50}
      />
    </ThemedView>
  )
}

const HistoryListItem: ListRenderItem<PomoSession> = ({ item }: { item: PomoSession }) => {
  return (
    <ThemedView>
      <ThemedView>
        <ThemedText>{new Date(item.startAt).toLocaleDateString()}</ThemedText>
        <ThemedText>{new Date(item.endAt).toLocaleDateString()}</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText>{item.edmTrackId}</ThemedText>
      </ThemedView>
    </ThemedView>
  )
}
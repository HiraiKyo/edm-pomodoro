import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

interface EdmDisplayProps {
  title: string;
  bpm: number;
};

export default ( { title, bpm }: EdmDisplayProps ) => {
  return (
    <ThemedView>
      <ThemedText>{title}</ThemedText>
      <ThemedText>{bpm}</ThemedText>
    </ThemedView>
  )
}
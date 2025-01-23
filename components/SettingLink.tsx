import { Link } from "expo-router"
import { StyleSheet, useColorScheme } from "react-native"
import { IconSymbol } from "./ui/IconSymbol"
import { Colors } from "@/constants/Colors"
import { SafeAreaView } from "react-native"

export default () => {
  const colorScheme = useColorScheme();

  return (
    <Link href="/settings" style={styles.settingsLink}>
      <IconSymbol name="gearshape.fill" size={48} color={Colors[colorScheme ?? "light"].icon} />
    </Link>
  )
}

const styles = StyleSheet.create({
  settingsLink: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
})
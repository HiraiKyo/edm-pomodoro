import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import HowToModal from './how-to';
import { Link } from 'expo-router';

export default function SettingsScreen() {
  const [showHowTo, setShowHowTo] = useState(false);

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>App Info and Settings</ThemedText>
      <Link href="/how-to" style={styles.settingItem}>
        <ThemedText>
          How to Use?
        </ThemedText>
      </Link>
      <Link href="/app-info" style={styles.settingItem}>
        <ThemedText>
          App Info
        </ThemedText>
      </Link>
      <Link href="/privacy-policy" style={styles.settingItem}>
        <ThemedText>
          Privacy Policy
        </ThemedText>
      </Link>
      <Link href="/term-of-use" style={styles.settingItem}>
        <ThemedText>
          Term of Use
        </ThemedText>
      </Link>
      <Link href="/license" style={styles.settingItem}>
        <ThemedText>
          License
        </ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
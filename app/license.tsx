import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import licenseData from '@/data/license.json';

export default function LicenseScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Licenses</ThemedText>
      <ScrollView style={styles.scrollView}>
        {Object.entries(licenseData).map(([name, info]: [string, any]) => (
          <ThemedView key={name} style={styles.licenseItem}>
            <ThemedText style={styles.packageName}>{name}</ThemedText>
            <ThemedText>License: {info.licenses}</ThemedText>
            {info.publisher && (
              <ThemedText>Publisher: {info.publisher}</ThemedText>
            )}
            {info.repository && (
              <ThemedText>Repository: {info.repository}</ThemedText>
            )}
          </ThemedView>
        ))}
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  licenseItem: {
    padding: 12,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  packageName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  }
});
import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function PrivacyPolicyScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Privacy Policy</ThemedText>
      <ScrollView style={styles.scrollView}>
        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>1. Information Collection</ThemedText>
          <ThemedText style={styles.text}>
            EDM Pomodoro does not collect any personal information. The app only stores your preferences and settings locally on your device.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>2. Data Storage</ThemedText>
          <ThemedText style={styles.text}>
            All app data, including your timer settings and preferences, are stored locally on your device and are not transmitted to any external servers.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>3. Third-Party Services</ThemedText>
          <ThemedText style={styles.text}>
            The app does not integrate with any third-party services that collect user data. We do not share any information with third parties.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>4. Data Security</ThemedText>
          <ThemedText style={styles.text}>
            We implement reasonable security measures to protect your data stored locally on your device.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>5. Children's Privacy</ThemedText>
          <ThemedText style={styles.text}>
            Our app does not specifically target or collect information from children under 13 years of age.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>6. Changes to Privacy Policy</ThemedText>
          <ThemedText style={styles.text}>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>7. Contact Us</ThemedText>
          <ThemedText style={styles.text}>
            If you have any questions about this Privacy Policy, please contact us through the app's support channel.
          </ThemedText>
        </ThemedView>
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  }
});

import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TermOfUseScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Terms of Use</ThemedText>
      <ScrollView style={styles.scrollView}>
        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>1. Acceptance of Terms</ThemedText>
          <ThemedText style={styles.text}>
            By accessing and using the EDM Pomodoro application, you agree to be bound by these Terms of Use.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>2. Use License</ThemedText>
          <ThemedText style={styles.text}>
            Permission is granted to use this app for personal, non-commercial purposes. This license does not include:
            {'\n'}- Modifying or copying the app materials
            {'\n'}- Using the materials for commercial purposes
            {'\n'}- Attempting to decompile or reverse engineer the app
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>3. Disclaimer</ThemedText>
          <ThemedText style={styles.text}>
            The app is provided "as is". We make no warranties, expressed or implied, and hereby disclaim all warranties, including any warranty of merchantability and fitness for a particular purpose.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>4. Limitations</ThemedText>
          <ThemedText style={styles.text}>
            We shall not be held liable for any damages arising from the use or inability to use the app's materials.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>5. Privacy</ThemedText>
          <ThemedText style={styles.text}>
            Your use of the app is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>6. Terms Updates</ThemedText>
          <ThemedText style={styles.text}>
            We may revise these terms of use at any time without notice. By using this app, you agree to be bound by the current version of these terms of use.
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

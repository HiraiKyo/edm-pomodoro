import { StyleSheet, ScrollView, Linking } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AppInfoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>App Information</ThemedText>
      <ScrollView style={styles.scrollView}>
        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Version</ThemedText>
          <ThemedText style={styles.text}>1.0.0</ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>About</ThemedText>
          <ThemedText style={styles.text}>
            EDM Pomodoro is a productivity timer app that helps you stay focused while enjoying EDM music. Using the Pomodoro Technique, it combines work intervals with break periods to maximize your productivity.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Developer</ThemedText>
          <ThemedText style={styles.text}>
            Created by Hirai Kyo
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Technologies</ThemedText>
          <ThemedText style={styles.text}>
            • React Native{'\n'}
            • Expo{'\n'}
            • Redux{'\n'}
            • TypeScript
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Support</ThemedText>
          <ThemedText style={styles.text}>
            For support inquiries or feedback, please contact us at:{'\n'}
            support@edmpomodoro.com
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Acknowledgments</ThemedText>
          <ThemedText style={styles.text}>
            Special thanks to all contributors and the open source community.
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

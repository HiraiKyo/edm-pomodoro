import { StyleSheet, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.modalContent}>
        <ThemedText style={styles.title}>How to Use?</ThemedText>
        <ScrollView>
          <ThemedView style={styles.step}>
            <ThemedText style={styles.stepTitle}>1. タイマーの設定</ThemedText>
            <ThemedText style={styles.stepText}>
              作業時間を25分、休憩時間を5分に設定します（カスタマイズ可能）。
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.step}>
            <ThemedText style={styles.stepTitle}>2. 作業開始</ThemedText>
            <ThemedText style={styles.stepText}>
              スタートボタンを押して作業を開始します。タイマーが終了するまで集中して作業を行ってください。
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.step}>
            <ThemedText style={styles.stepTitle}>3. 休憩時間</ThemedText>
            <ThemedText style={styles.stepText}>
              作業時間が終わったら、短い休憩を取ります。リフレッシュして次の作業に備えましょう。
            </ThemedText>
          </ThemedView>
        </ScrollView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    right: 15,
    top: 15,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  step: {
    marginBottom: 20,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  stepText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
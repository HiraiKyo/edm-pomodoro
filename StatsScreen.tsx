import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LineChart } from 'react-native-chart-kit';

interface StatsScreenProps {
  focusTime: number;
  breakTime: number;
  completedPomodoros: number;
  weeklyStats: {
    labels: string[];
    data: number[];
  };
}

export const StatsScreen: React.FC<StatsScreenProps> = ({
  focusTime,
  breakTime,
  completedPomodoros,
  weeklyStats,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statsContainer}>
        <Text style={styles.title}>統計情報</Text>
        
        <View style={styles.card}>
          <Text style={styles.label}>集中時間</Text>
          <Text style={styles.value}>{focusTime}分</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>休憩時間</Text>
          <Text style={styles.value}>{breakTime}分</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>完了したポモドーロ</Text>
          <Text style={styles.value}>{completedPomodoros}</Text>
        </View>

        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>週間アクティビティ</Text>
          <LineChart
            data={{
              labels: weeklyStats.labels,
              datasets: [{ data: weeklyStats.data }],
            }}
            width={300}
            height={200}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            }}
            style={styles.chart}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  statsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#666666',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  chartContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chart: {
    borderRadius: 10,
  },
});
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import HistoryListView from '@/components/History/HistoryListView';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { CommonStyle } from '@/constants/Styles';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Link } from 'expo-router';

export default () => {
  const colorScheme = useColorScheme();

  const { sessions } = useSelector((state: RootState) => state.history);

  return (
    <ParallaxScrollView
      title="History"
      headerBackgroundColor={Colors[colorScheme ?? "light"].background}
      headerImage={
        <IconSymbol
          size={310}
          color={Colors[colorScheme ?? "light"].accent3}
          name="clock.fill"
          style={styles.headerImage}
        />
      }>
      <HistoryListView
        sessions={sessions}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: CommonStyle.spacing[1]
  },
  settingsLink: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
});
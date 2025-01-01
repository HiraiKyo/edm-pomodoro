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

export default () => {
  const { sessions } = useSelector((state: RootState) => state.history);

  return (
    <HistoryListView
      sessions={sessions}
    />
  );
}
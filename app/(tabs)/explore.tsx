import { StyleSheet, useColorScheme } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import PlaylistListView from '@/components/Explore/PlaylistListView';
import { playlists } from '@/data/generated-playlists';
import { useCallback } from 'react';
import { Playlist } from '@/store/reducers/playlistSlice';
import { useDispatch } from 'react-redux';
import { setPlaylist } from '@/store/reducers/playlistSlice';
import { Colors } from '@/constants/Colors';

export default () => {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  const handleSelect = useCallback((playlist: Playlist) => {
    dispatch(setPlaylist(playlist));
  }, [])

  return (
    <ParallaxScrollView
      title="Explore"
      headerBackgroundColor={Colors[colorScheme ?? "light"].background}
      headerImage={
        <IconSymbol
          size={310}
          color={Colors[colorScheme ?? "light"].accent}
          name="paperplane.fill"
          style={styles.headerImage}
        />
      }>
      <PlaylistListView
        playlists={playlists}
        onSelect={handleSelect}
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
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

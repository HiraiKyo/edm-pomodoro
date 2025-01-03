import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import PlaylistListView from '@/components/Explore/PlaylistListView';
import { playlists } from '@/data/generated-playlists';
import { useCallback } from 'react';
import { Playlist } from '@/store/reducers/playlistSlice';
import { useDispatch } from 'react-redux';
import { setPlaylist } from '@/store/reducers/playlistSlice';

export default () => {
  const dispatch = useDispatch();

  const handleSelect = useCallback((playlist: Playlist) => {
    dispatch(setPlaylist(playlist));
  }, [])

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
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
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

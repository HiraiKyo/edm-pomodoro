import { Text, View, StyleSheet, Linking, TouchableOpacity, useColorScheme, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { playlists } from '@/data/generated-playlists';

export default function CreditsScreen() {
  const colorScheme = useColorScheme();

  const handleArgoFoxPress = () => {
    Linking.openURL('https://soundcloud.com/argofox');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Credits' }} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={[styles.title, { color: Colors[colorScheme ?? 'light'].text }]}>
            Music Credits
          </Text>
          <Text style={[styles.text, { color: Colors[colorScheme ?? 'light'].text }]}>
            All music tracks used in this app are provided by:
          </Text>
          <TouchableOpacity onPress={handleArgoFoxPress}>
            <Text style={styles.link}>ArgoFox</Text>
          </TouchableOpacity>
          
          {playlists.map(playlist => (
            <View key={playlist.id} style={styles.playlistSection}>
              <Text style={[styles.artistName, { color: Colors[colorScheme ?? 'light'].text }]}>
                {playlist.title}
              </Text>
              {playlist.tracks.map(track => (
                <Text key={track.id} style={[styles.trackName, { color: Colors[colorScheme ?? 'light'].text }]}>
                  • {track.title}
                </Text>
              ))}
            </View>
          ))}
          
          <Text style={[styles.license, { color: Colors[colorScheme ?? 'light'].text }]}>
            All tracks are licensed under Creative Commons Attribution License
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  link: {
    fontSize: 20,
    color: '#007AFF',
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
  scrollView: {
    flex: 1,
  },
  playlistSection: {
    marginTop: 20,
    width: '100%',
  },
  artistName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  trackName: {
    fontSize: 14,
    marginLeft: 16,
    marginBottom: 4,
  },
  license: {
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  }
});

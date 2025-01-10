import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import "../global.css"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Provider} from 'react-redux';
import { store } from '@/store';
import TickControl from '@/components/Timer/TickControl';
import EdmControl from '@/components/SongPlayer/EdmControl';
import HistoryControl from '@/components/History/HistoryControl';
import SettingLink from '@/components/SettingLink';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="settings" options={{ title: "Settings", presentation: "modal" }} />
          <Stack.Screen name="how-to" options={{ title: "How to Use?", presentation: "modal" }} />
          <Stack.Screen name="license" options={{ title: "License", presentation: "modal" }} />
          <Stack.Screen name="term-of-use" options={{ title: "Term of Use", presentation: "modal" }} />
          <Stack.Screen name="app-info" options={{ title: "App Info", presentation: "modal" }} />
          <Stack.Screen name="privacy-policy" options={{ title: "Privacy Policy", presentation: "modal" }} />
          <Stack.Screen name="credits" options={{ title: "Credits", presentation: "modal" }} />
        </Stack>
        <StatusBar style="auto" />
        <TickControl />
        <EdmControl />
        <HistoryControl />
      </Provider>
    </ThemeProvider>
  );
}

import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";
import { server } from "../lib";
import { Poppins_500Medium, Poppins_600SemiBold, Poppins_800ExtraBold, useFonts } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    Poppins_800ExtraBold, Poppins_600SemiBold, Poppins_500Medium
  })

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
      </SafeAreaView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* maybe smth */}
      </Stack>
    </GestureHandlerRootView>
  );
}

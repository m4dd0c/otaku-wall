import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";
import { server } from "../lib";

export default function Layout() {
  return (
    <GestureHandlerRootView>
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

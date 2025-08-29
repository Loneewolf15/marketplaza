import { Stack } from "expo-router";
import "../global.css";
import { useFonts, Poppins_600SemiBold, Poppins_200ExtraLight } from "@expo-google-fonts/poppins";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_200ExtraLight,
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />

      <Stack.Screen name="+not-found" options={{ headerShown: false }} />

      <Stack.Screen
        name="(onboard)/onboard"
        options={{ headerShown: false, title: "onboard" }}
      />

      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false, title: "auth" }}
      />
    </Stack>
  );
}

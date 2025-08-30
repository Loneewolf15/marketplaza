import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { useFonts } from "@expo-google-fonts/poppins";
import { Stack } from "expo-router";
import React from "react";
import "../../global.css";

const AuthLayout = () => {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Stack>
      <Stack.Screen name="intro" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;

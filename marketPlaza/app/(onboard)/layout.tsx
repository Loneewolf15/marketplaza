import { Poppins_200ExtraLight, Poppins_600SemiBold, useFonts } from "@expo-google-fonts/poppins";
import { Stack } from "expo-router";
import React from "react";

const OnboardLayout = () => {
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
        name="onboard"
        options={{ headerShown: false, title: "onboard" }}
      />
    </Stack>
  );
};

export default OnboardLayout;

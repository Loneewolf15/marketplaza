import { Stack } from "expo-router";
import React from "react";
import "../../global.css";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="intro" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;

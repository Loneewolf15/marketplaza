import { Text, View } from "react-native";
import "../global.css";
import SplashOne from "./splash-1";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashOne onFinish={() => setShowSplash(false)} />;
  }

  const navigateToOnboard = () => {
    router.push("/(onboard)/onboard");
  };

  return (
    <View className="flex-1 items-center justify-center bg-blue-500 px-10">
      <Text className="text-white text-4xl font-bold">
        Welcome to MarketPlaza 👋
      </Text>

      <Text className="text-white text-center mt-4" onPress={() => {navigateToOnboard()}}>
        This is the main content of the app. Replace this with your actual app
        content.
      </Text>
    </View>
  );
}

import { Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Intro = () => {
  return (
    <LinearGradient
      colors={["#FFA658", "#FF6D00", "#FF5E00"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }} // use style instead of className
    >
      <Text className="text-white text-lg">this is the intro screen</Text>
    </LinearGradient>
  );
};

export default Intro;

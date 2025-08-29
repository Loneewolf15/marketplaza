import { Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  className?: string;
  title: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, title, onPress }) => {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableOpacity
      className={`rounded-2xl ${className} py-[8px] items-center`}
      onPress={onPress}
    >
      <Text className={`${className} font-poppins-medium`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

import Button from "@/components/Buttons/Button";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Intro = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/(auth)/register");
  };

  const handleSignIn = () => {
    router.push("/(auth)/login");
  };
  return (
    <LinearGradient
      colors={["#FFA658", "#FF6D00", "#FF5E00"]}
      start={{ x: 1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }} // use style instead of className
    >
      <SafeAreaView className="flex-1 justify-between px-5 py-10 w-full">
        <View className="justify-center items-center gap-3 flex-1">
          <Text className="text-[#FFFFFF] justify-center items-center text-3xl text-center flex font-poppins-semibold">
            Welcome to <Text className="text-[#0D3720] mt-5">Marketplaza</Text>
          </Text>

          <Text className="text-[#FFFFFF] text-center text-2xl font-poppins-extraLight w-80">
            Create an account to get started{" "}
          </Text>
        </View>

        <View className="w-full">
          <Button
            title="Sign Up"
            onPress={() => {
              handleSignUp();
            }}
            className="bg-[#FFEDE3] text-[#FF5E00] text-2xl text-center"
          />

          <View className="flex-row justify-center items-center gap-2 mt-5">
            <Text className="text-lg text-[#FFFFFF]">
              Already have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                handleSignIn();
              }}
            >
              <Text className="text-[#02321C] text-center text-lg font-poppins-medium underline">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Intro;

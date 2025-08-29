import Button from "@/components/Buttons/Button";
import Slide1 from "@/components/Onboard/Slide1";
import Slide2 from "@/components/Onboard/Slide2";
import Slide3 from "@/components/Onboard/Slide3";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboard = () => {
  const [step, setStep] = React.useState(1);
  const router = useRouter();

  const navigateToNextScreen = () => {
    setStep((prev) => {
      const next = Math.min(prev + 1, 4);
      if (next === 4 && prev === 4) {
        // Final step reached; navigate
        console.log("Onboarding complete, navigate to main app");
      }
      return next;
    });
  };

  const handleNavigateToAuth = () => {
    router.replace("/(auth)/intro");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Main content padding; extra bottom padding to avoid overlap when step=4 */}
      <View className={`flex-1 px-10 ${step === 4 ? "pb-24" : ""}`}>
        <View className="justify-center gap-5 flex-1">
          {step <= 3 && (
            <TouchableOpacity onPress={() => setStep(4)}>
              <Text className="font-poppins-medium text-[#FF5E00] self-end text-2xl">
                Skip
              </Text>
            </TouchableOpacity>
          )}

          {step === 1 && <Slide1 />}
          {step === 2 && <Slide2 />}
          {step === 3 && <Slide3 />}

          {/* Indicators */}
          <View className="gap-5 mt-5">
            {step === 1 && (
              <View className="flex-row justify-center gap-2">
                <View className="h-[10px] w-5 rounded-full bg-[#FF5E00]" />
                <LinearGradient
                  colors={["#FFEDE3", "#FFA658"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 10, width: 32, borderRadius: 9999 }}
                />
                <View className="h-[10px] w-5 rounded-full bg-[#FFA658]" />
              </View>
            )}

            {step === 2 && (
              <View className="flex-row justify-center gap-2">
                <View className="h-[10px] w-5 rounded-full bg-[#FFEDE3]" />
                <LinearGradient
                  colors={["#FF5E00", "#FFA658"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 10, width: 32, borderRadius: 9999 }}
                />
                <View className="h-[10px] w-5 rounded-full bg-[#FFA658]" />
              </View>
            )}

            {step === 3 && (
              <View className="flex-row justify-center gap-2">
                <View className="h-[10px] w-5 rounded-full bg-[#FFA658]" />
                <LinearGradient
                  colors={["#FFA658", "#FFEDE3"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 10, width: 32, borderRadius: 9999 }}
                />
                <View className="h-[10px] w-5 rounded-full bg-[#FF5E00]" />
              </View>
            )}

            {step === 4 && (
              <View className="flex-row justify-center gap-2">
                <View className="h-[10px] w-5 rounded-full bg-[#FFA658]" />
                <LinearGradient
                  colors={["#FFA658", "#FF5E00"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 10, width: 32, borderRadius: 9999 }}
                />
                <LinearGradient
                  colors={["#FFA658", "#FFEDE3"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ height: 10, width: 20, borderRadius: 9999 }}
                />
              </View>
            )}

            {/* "Next" only for steps 1–3, inline (not fixed) */}
            {step < 4 && (
              <View>
                <Button
                  title="Next"
                  className="bg-[#FF5E00] text-[#FFEDE3] text-2xl"
                  onPress={navigateToNextScreen}
                />
              </View>
            )}
          </View>
        </View>
      </View>

      {/* Fixed bottom "Get Started" ONLY when step === 4 */}
      {step === 4 && (
        <View className="absolute left-0 right-0 bottom-10 px-10 pb-6">
          <Button
            title="Get Started"
            className="bg-[#FF5E00] text-[#FFEDE3] text-2xl"
            onPress={() => {
              handleNavigateToAuth()
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Onboard;

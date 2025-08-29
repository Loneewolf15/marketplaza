import { Icons } from "@/components/icons/icon";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";

SplashScreen.preventAutoHideAsync(); // Keep splash until we hide it manually

const SplashOne = ({ onFinish }: { onFinish?: () => void }) => {
  const [showGradient, setShowGradient] = useState(false);
  const router = useRouter();

  const rotation = useRef(new Animated.Value(0)).current;
  const gradientOpacity = useRef(new Animated.Value(0)).current;
  const textScale = useRef(new Animated.Value(0)).current; // 👈 start hidden (scale 0)

  useEffect(() => {
    SplashScreen.hideAsync();

    // rotation loop
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();

    // background + text animation after 800ms
    const bgColorTimer = setTimeout(() => {
      setShowGradient(true);

      // fade in gradient
      Animated.timing(gradientOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();

      // 👇 zoom text when gradient shows
      Animated.spring(textScale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }).start();
    }, 800);

    // navigate after 3s
    const timer = setTimeout(() => {
      if (onFinish) {
        onFinish();
      } else {
        router.replace("/");
      }
    }, 2000);

    return () => {
      clearTimeout(bgColorTimer);
      clearTimeout(timer);
    };
  }, [onFinish, router, rotation, gradientOpacity, textScale]);

  // rotation interpolation
  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const spin2 = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View className="flex-1 justify-center items-center bg-[#121212]">
      {/* Gradient overlay fades in after 800ms */}
      {showGradient && (
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: gradientOpacity,
          }}
        >
          <LinearGradient
            colors={["#FF6D00", "#FFA658", "#FF5E00"]}
            start={{ x: -0.3, y: 0.6 }}
            end={{ x: -0.3, y: 0.3 }}
            style={{ flex: 1 }}
          />
        </Animated.View>
      )}

      <View className="flex flex-row justify-center items-center gap-4">
        <Animated.View
          style={{ transform: [{ rotate: showGradient ? spin2 : spin }] }}
        >
          {showGradient ? (
            <Icons.SplashIconTwo className="w-20 h-20 text-white" />
          ) : (
            <Icons.SplashIconOne className="w-20 h-20 text-white" />
          )}
        </Animated.View>

        {showGradient && (
          <Animated.Text
            style={{
              transform: [{ scale: textScale }],
            }}
            className="text-[#0D3720] text-[62.03px] font-poppins-semibold"
          >
            Plaza
          </Animated.Text>
        )}
      </View>
    </View>
  );
};

export default SplashOne;

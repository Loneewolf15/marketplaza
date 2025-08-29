import React from "react";
import { Image, Text, View } from "react-native";

const SlideImg = require("@/assets/images/onboard/slide2.png");

const Slide1 = () => {
  return (
    <View className="items-center gap-7">
      <Image
        source={SlideImg}
        className="w-full h-[350px] rounded-[20px]"
        resizeMode="cover"
      />

      <Text className="text-[#000000] font-poppins-semibold text-2xl w-64 text-center leading-9">
        Safe Payment with Escrow
      </Text>

      <Text className="text-center text-2xl w-80 font-poppins-extraLight leading-6">
        Your money is safe with us, only release payment when you get your goods
      </Text>
    </View>
  );
};

export default Slide1;

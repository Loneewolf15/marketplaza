import React from "react";
import { Image, Text, View } from "react-native";

const SlideImg = require("@/assets/images/onboard/slide1.png");

const Slide1 = () => {
  return (
    <View className="items-center gap-7">
      <Image
        source={SlideImg}
        className="w-full h-[350px] rounded-[20px]"
        resizeMode="cover"
      />

      <Text className="text-[#000000] font-poppins-semibold text-2xl w-40 text-center leading-9">
        Buy and Sell Anywhere
      </Text>

      <Text className="text-center text-2xl w-80 font-poppins-extraLight leading-7">
        Your market never closes, buy from sellers or list items anywhere!
      </Text>
    </View>
  );
};

export default Slide1;

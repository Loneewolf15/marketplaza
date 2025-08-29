import React from "react";
import { Image, Text, View } from "react-native";

const SlideImg = require("@/assets/images/onboard/slide3.png");

const Slide1 = () => {
  return (
    <View className="items-center gap-7">
      <Image
        source={SlideImg}
        className="w-full h-[350px] rounded-[20px]"
        resizeMode="cover"
      />

      <Text className="text-[#000000] font-poppins-semibold text-2xl w-52 text-center leading-9">
        Earn Money by Reselling
      </Text>

      <Text className="text-center text-2xl w-80 font-poppins-extraLight leading-7">
        Start small, scale fast. Resell popular items and build your own
        business!
      </Text>
    </View>
  );
};

export default Slide1;

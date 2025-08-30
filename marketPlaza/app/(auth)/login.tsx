import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Buttons/Button';
import { Icons } from '@/components/icons/icon';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.replace("/(auth)/register");
  };

  return (
    <SafeAreaView className="bg-[#FF5E00] flex-1" edges={["top"]}>
      <View className="bg-white flex-[0.8] mt-auto rounded-t-[17px]">
        <View className="p-10 gap-5">
          <Text className="text-2xl text-[#FF5E00] font-poppins-semibold">
            Sign In
          </Text>

          <View className="mt-5 gap-5">

            <View className="gap-1">
              <Text>Email</Text>
              <TextInput
                className="bg-[#FFEDE3FC] rounded-xl h-14 p-5 placeholder:text-[#000000] placeholder:font-inter-regular placeholder:opacity-40"
                placeholder="Example@gmail.com"
              />
            </View>

            <View className="gap-1">
              <Text>Password</Text>
              <TextInput
                className="bg-[#FFEDE3FC] rounded-xl h-14 p-5 placeholder:text-[#000000] placeholder:font-inter-regular placeholder:opacity-40"
                placeholder="At least 8 characters"
                secureTextEntry={true}
              />

              <TouchableOpacity className="flex-row justify-end mt-2">
                <Text className="text-[#02321C] font-inter-medium underline text-sm">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="">
            <Button
              title="Sign In"
              className="bg-[#FF5E00] text-white text-2xl text-center"
              onPress={() => {}}
            />
          </View>

          <View className="flex-row items-center justify-between">
            <View className="flex-1 h-[1px] bg-[#DDDDDD]" />
            <Text className="text-center text-[#000000] font-inter-regular px-3">
              OR
            </Text>
            <View className="flex-1 h-[1px] bg-[#DDDDDD]" />
          </View>

          <View className="flex-row items-center justify-center gap-2">
            <TouchableOpacity className="flex-row items-center justify-center mt-5 gap-2 bg-[#FFEDE3] rounded-lg py-1 px-3">
              <Icons.googleIcon />
              <Text className="font-inter-regular text-sm text-[#000000]">
                Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-center mt-5 gap-2 bg-[#FFEDE3] rounded-lg py-1 px-3">
              <Icons.facebookIcon />
              <Text className="font-inter-regular text-sm text-[#000000]">
                Facebook
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center items-center gap-2 mt-5">
            <Text className="text-sm text-[#000000] font-inter-regular">
              Don’t have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                handleSignUp();
              }}
            >
              <Text className="text-[#02321C] text-sm text-center underline font-inter-medium">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login
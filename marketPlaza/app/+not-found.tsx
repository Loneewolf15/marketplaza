import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen />
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Sorry, the page you are looking for cannot be found.</Text>
        <Link href="/" className="mt-15 p-4">
          <Text className="text-blue-500">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

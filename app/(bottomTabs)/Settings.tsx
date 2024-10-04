import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function () {
  return (
    <SafeAreaView>
      <Text className="text-xl font-bold">Settings</Text>
      <View>
        <Text>Theme</Text>
        <View className="flex justify-evenly items-center">
          {/* <Button onPress={() => console.log("clicked")}>Light</Button> */}
          {/* <Button onPress={() => console.log("click")}>Dark</Button> */}
          <TouchableOpacity
            onPress={() => console.log("c")}
            className="bg-green-500 border"
          >
            <Text>children</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

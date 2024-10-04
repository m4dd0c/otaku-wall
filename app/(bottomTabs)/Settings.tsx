import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function () {
  const modes = ["Light", "Dark", "System"];
  return (
    <SafeAreaView>
      <View className="p-7">
        <View className="flex justify-center items-center h-[60%]">
          <Text className="text-7xl">Settings</Text>
          <Text>Change themes and clear things up.</Text>
        </View>
        <View className="">
          {/* theme selection */}
          <Text className="font-semibold text-xl py-2">Theme</Text>
          <View className="flex flex-row justify-evenly items-center gap-3">
            {modes.map((mode) => (
              <View className="border border-gray-500 w-1/3 rounded-lg">
                <TouchableOpacity onPress={() => console.log("c")}>
                  <Text className="text-center py-3 font-semibold text-lg">
                    {mode}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <View className="gap-3 pt-5">
          <Text className="font-semibold text-xl pt-2">Danger Zone</Text>
          {/* clear library */}
          <View className="border border-red-500 w-full rounded-lg">
            <TouchableOpacity onPress={() => console.log("c")}>
              <Text className="text-center py-3 font-semibold text-lg text-red-500">
                Clear Library
              </Text>
            </TouchableOpacity>
          </View>

          {/* clear liked */}
          <View className="border border-red-500 w-full rounded-lg">
            <TouchableOpacity onPress={() => console.log("c")}>
              <Text className="text-center py-3 font-semibold text-lg text-red-500">
                Clear Liked
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text className="font-bold text-center text-lg text-neutral-800">
        Made with love
      </Text>
    </SafeAreaView>
  );
}

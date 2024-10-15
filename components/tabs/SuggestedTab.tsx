import React from "react";
import { View, Text } from "react-native";
import { ImageCarousel } from "../cards/ImageCarousel";
import { SafeAreaView } from "react-native-safe-area-context";

const SuggestedTab = () => {
  return (
    <SafeAreaView className="py-10">
      <Text className="font-pop_semibold">Suggested</Text>
      <ImageCarousel />
    </SafeAreaView >
  );
};

export default SuggestedTab;

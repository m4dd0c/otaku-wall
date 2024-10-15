import React from 'react';
import { Dimensions, Image, View, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const ImageCard = ({ src }: { src: string }) => {
  const { width } = Dimensions.get("window");
  const handler = () => {
    console.log("Hello world");
  }

  console.log(src);
  return <View>
    <Image
      source={{ uri: src }}
      alt="loading..."
      style={{ width, height: 500, resizeMode: 'cover', borderRadius: 10, overflow: 'hidden' }}
    />
    {/* <LinearGradient */}
    {/*   style={{ width: width * 0.4, height: 50 }} */}
    {/*   start={{ x: 0, y: 0 }} */}
    {/*   end={{ x: 0, y: 1 }} */}
    {/*   className="absolute -bottom-2 -left-8 rounded-3xl" */}
    {/*   colors={[ */}
    {/*     "transparent", */}
    {/*     "rgba(15, 23, 42, 0.3)", */}
    {/*     "rgba(15, 23, 42, 0.7)", */}
    {/*   ]} */}
    {/* /> */}
  </View>
}

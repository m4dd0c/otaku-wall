import React from 'react'

import { Image, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const cor = () => {

  return <View>
    <Image source={{ uri: "https://cdn-images-1.medium.com/v2/resize:fit:800/1*BWpx3uRPlWByahoXA6M-BQ.jpeg" }} alt="img" />
  </View>
}

const ImageCard = ({ src, size = 'md' }: { src: string, size?: "lg" | "md" | "sm" }) => {
  return (
    <View>
      <Carousel

        renderItem={cor}
        sliderWidth={30}
        itemWidth={80}
      />
    </View>
  )
}

export default ImageCard

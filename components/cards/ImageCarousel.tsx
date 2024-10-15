import { getRandomImages } from '@/lib/actions/imageActions';
import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { ImageCard } from './ImageCard';

export const ImageCarousel = () => {
  const { width } = Dimensions.get("window");
  const [data, setData] = useState<IWall[] | null>(null);
  const [initData, setInitData] = useState<IWall[] | null>(null);

  const initDataSanitizer = useCallback(async (data: IWall[], filterDataStartingIdx = 0) => {
    // finding some portrait images
    const initData = data.filter(item => item.image_width < item.image_height);
    initData.length > 0 ? setInitData(initData) : await fetchData();
  }, [data]);

  const fetchData = useCallback(async () => {
    const data = await getRandomImages();
    initDataSanitizer(data.items);
    setData(data.items);
  }, [])

  useEffect(() => {
    fetchData();
  }, [])

  return !initData ? <Text> Loading ...</Text> : <View className='flex justify-center items-center' style={{ width, height: width }}>
    <Carousel
      autoPlayInterval={1000}
      width={width}
      loop={true}
      height={500}
      data={initData}
      style={{ width }}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 50,
      }}
      renderItem={({ index, item }: { index: number, item: IWall }) => (
        <ImageCard src={item.image_url} key={index} />
      )}
    />
  </View>
}


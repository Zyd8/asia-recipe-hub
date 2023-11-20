import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, useWindowDimensions, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { DATA } from "./data";

const Spotlight = () => {
  const { height, width } = useWindowDimensions();
  const [isPortrait, setIsPortrait] = useState(height > width);

  useEffect(() => {
    const handleOrientationChange = () => {
      const { height, width } = Dimensions.get("window");
      setIsPortrait(height > width);
    };

    Dimensions.addEventListener("change", handleOrientationChange);

    return () => {
      Dimensions.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  return (
    <View style={styles.carouselContainer}>
      {isPortrait && (
        <Carousel
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <Image source={item.image} style={styles.image} />
            </View>
          )}
          sliderWidth={width}
          itemWidth={250}
          layout="default"
          firstItem={2}
          useScrollView={true}
          autoplay={true}
          autoplayInterval={3000}
          loop={true}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 20,
  },
  slide: {
    backgroundColor: "transparent",
  },
});

export default Spotlight;

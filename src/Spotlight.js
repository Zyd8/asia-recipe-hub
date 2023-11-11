import React from "react";
import { View, Image, StyleSheet, useWindowDimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { DATA } from "./data";



const Spotlight = () => {
  const {height, width} = useWindowDimensions();
  console.log("height",height*0.25)
  console.log("width", width)
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
        sliderWidth={500}
        itemWidth={250}
        layout="default"
        firstItem={5}
        useScrollView={false}
        autoplay={true}            
        autoplayInterval={3000}
        loop={true}
        height={height*0.25}
      />
    </View>
  );
  
};

const styles = StyleSheet.create({
  carouselContainer: {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    margin: 5
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

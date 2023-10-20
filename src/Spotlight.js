import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Spotlight = ({ recipe }) => {
  return (
    <View>
      <View style={styles.carouselContainer}>
        <View style={styles.slide}>
          <Image source={recipe.image} style={styles.image} />
          </View>
      </View>
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
    margin: 5,
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

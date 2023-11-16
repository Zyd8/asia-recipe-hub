import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Cards = ({ recipe }) => {
  const navigation = useNavigation();

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

  const handleRecipeCardPress = () => {
    navigation.navigate("Recipe", { recipe });
  };

  const handleHeartIconPress = () => {
    setHeart((prevHeart) =>
      prevHeart === require("./img/heart.png")
        ? require("./img/heartclicked.png")
        : require("./img/heart.png")
    );
  };
  const [heart, setHeart] = useState(require("./img/heart.png"));

  return (
    <TouchableOpacity onPress={handleRecipeCardPress} style={[styles.cardContainer, isPortrait ? styles.portraitCard : styles.landscapeCard]}>
      <Image source={recipe.image} style={isPortrait? styles.imagePortrait : styles.imageLandscape} />
      <TouchableOpacity onPress={handleHeartIconPress} style={styles.heartContainer}>
        <View style={styles.heartShadow} />
        <Image source={heart} style={styles.heart} />    
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.recipeTitle}>{recipe.title}</Text>
          <Text>Cooking Time: {recipe.cookingTime} minutes</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Text>Origin: {recipe.originCountry}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    width: "90%", 
  },
  portraitCard: {
    height: 150
  },
  landscapeCard: {
    height: 100
  },
  imagePortrait: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  imageLandscape: {
    width: "100%",
    height: 50,
    borderRadius: 8,
  },
  textContainer: {
    padding: 10,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  heartContainer: {
    position: 'absolute',
    right: 7,
    top: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartShadow: {
    position: 'absolute',
    width: 45,
    height: 40,
    borderRadius: 30 / 2,
    backgroundColor: 'black',
    opacity: 0.05,
  },
  heart: {
    height: 35,
    width: 35,
    zIndex: 1,
  },
});
export default Cards;

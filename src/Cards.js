import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Cards = ({ recipe }) => {
  const navigation = useNavigation();

  const handleRecipeCardPress = () => {
    navigation.navigate("Recipe", { recipe });
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={handleRecipeCardPress}>
        <Image source={recipe.image} style={styles.image} resizeMode="cover" />
        <View style={styles.textContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.recipeTitle}>{recipe.title}</Text>
            <Text>Cooking Time: {recipe.cookingTime}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Text>Origin: {recipe.originCountry}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
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
  },
  image: {
    width: 350,
    height: 190,
  },
  textContainer: {
    padding: 10,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Cards;

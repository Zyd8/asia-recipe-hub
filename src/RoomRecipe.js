import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useRoute } from '@react-navigation/native';

const RoomRecipe = () => {
  const route = useRoute();
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={recipe.image} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.info}>Country of Origin: {recipe.originCountry}</Text>
      <Text style={styles.info}>Cooking Time: {recipe.cookingTime}</Text>
      
      <Text style={styles.subTitle}>Ingredients:</Text>
      <View style={styles.ingredientsList}>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>{ingredient}</Text>
        ))}
      </View>

      <Text style={styles.subTitle}>Procedure:</Text>
      <View style={styles.procedureList}>
        {recipe.procedure.map((step, index) => (
          <Text key={index} style={styles.procedureStep}>
            {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#D7D0C8",
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: "center",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  info: {
    fontSize: 16,
    marginTop: 5,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  ingredientsList: {
    marginTop: 5,
  },
  ingredient: {
    fontSize: 16,
    marginLeft: 10,
  },
  procedure: {
    fontSize: 16,
    marginTop: 10,
  },
  procedureList: {
    marginTop: 5,
  },
  procedureStep: {
    fontSize: 16,
    marginLeft: 10,
  },  
});

export default RoomRecipe;

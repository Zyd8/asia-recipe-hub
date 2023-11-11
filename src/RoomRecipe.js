import React from "react";
import { View, Text, StyleSheet, ScrollView, useWindowDimensions} from "react-native";
import { useRoute } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";


const RoomRecipe = () => {
  const route = useRoute();
  const { recipe } = route.params;
  const {height, width} = useWindowDimensions();
  console.log("height",height*0.25)
  console.log("width", width)

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <YoutubePlayer
        height={width*0.6}
        play={true}
        videoId={recipe.videoId}
      />
      <Text style={styles.title}>{recipe.title}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoIcon}>🌎</Text>
        <Text style={styles.info}>
          Country of Origin: {recipe.originCountry}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoIcon}>⏱️</Text>
        <Text style={styles.info}>Cooking Time: {recipe.cookingTime}</Text>
      </View>

      <Text style={styles.subTitle}>Ingredients:</Text>
      <View style={styles.ingredientsList}>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>
            {ingredient}
          </Text>
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
    flex: 1,
    padding: 10,
    backgroundColor: "#F7F4E7",
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: "center",
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  infoIcon: {
    fontSize: 16,
    marginRight: 5,
  },
  info: {
    fontSize: 16,
  },
  subTitle: {
    fontSize: 24,
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
  procedureList: {
    marginTop: 5,
  },
  procedureStep: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default RoomRecipe;

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, useWindowDimensions, Dimensions, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import YoutubePlayer from "react-native-youtube-iframe";

const RoomRecipe = () => {
  const route = useRoute();
  const { recipe } = route.params;

  const { height, width } = useWindowDimensions();
  const [isPortrait, setIsPortrait] = useState(height > width);
  useEffect(() => {
    const handleOrientationChange = () => {
      const { height, width } = Dimensions.get("window");
      setIsPortrait(height > width);
    };

    Dimensions.addEventListener("change", handleOrientationChange);
  }, []);

  const [checkedIngredients, setCheckedIngredients] = useState(
    Array(recipe.ingredients.length).fill(false)
  );

  const [checkedProcedure, setCheckedProcedure] = useState(
    Array(recipe.procedure.length).fill(false)
  );

  const handleIngredientCheck = (index) => {
    const newCheckedIngredients = [...checkedIngredients];
    newCheckedIngredients[index] = !newCheckedIngredients[index];
    setCheckedIngredients(newCheckedIngredients);
  };

  const handleProcedureCheck = (index) => {
    const newCheckedProcedure = [...checkedProcedure];
    newCheckedProcedure[index] = !newCheckedProcedure[index];
    setCheckedProcedure(newCheckedProcedure);
  };

  const renderIngredientItem = ({ item, index }) => (
    <View style={styles.ingredientContainer}>
      <BouncyCheckbox
        isChecked={checkedIngredients[index]}
        onPress={() => handleIngredientCheck(index)}
      />
      <Text
        style={[
          styles.ingredientText,
          checkedIngredients[index] && styles.strikethrough,
        ]}
      >
        {item}
      </Text>
    </View>
  );

  const renderProcedureItem = ({ item, index }) => (
    <View style={styles.procedureContainer}>
      <BouncyCheckbox
        isChecked={checkedProcedure[index]}
        onPress={() => handleProcedureCheck(index)}
      />
      <Text
        style={[
          styles.procedureStep,
          checkedProcedure[index] && styles.strikethrough,
        ]}
      >
        {item}
      </Text>
    </View>
  );

  return (
    <View
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
     <YoutubePlayer
        height={isPortrait ? width * 0.6 : width * 0.3} // Adjust the height conditionally
        play={true}
        videoId={recipe.videoId}
      />
        <ScrollView>
        <Text style={styles.title}>{recipe.title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoIcon}>🌎</Text>
          <Text style={styles.info}>Country of Origin: {recipe.originCountry}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoIcon}>⏱️</Text>
          <Text style={styles.info}>Cooking Time: {recipe.cookingTime} minutes</Text>
        </View>

        <Text style={styles.subTitle}>Ingredients:</Text>
        <FlatList
          data={recipe.ingredients}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderIngredientItem}
        />

        <Text style={styles.subTitle}>Procedure:</Text>
        <FlatList
          data={recipe.procedure}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderProcedureItem}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F7F4E7",
  },
  ingredientContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10,
  },
  strikethrough: {
    textDecorationLine: "line-through",
  },
  procedureContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  procedureStep: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
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
    marginVertical: 10,
    textAlign: "center",
    backgroundColor: "#AB8476",
    padding: 5,
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
    backgroundColor: "#AB8476",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    padding: 5,
  },
  ingredientsList: {
    marginTop: 5,
  },
  ingredient: {
    fontSize: 16,
    marginLeft: 10,
  },
  procedureList: {
    marginTop: 10,
  },
  procedureStep: {
    textAlign: "justify",
    fontSize: 16,
    marginLeft: 5,
    marginRight: 50,
    overflow: "visible",
  },
});

export default RoomRecipe;

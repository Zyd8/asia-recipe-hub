import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, useWindowDimensions, Dimensions, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import YoutubePlayer from "react-native-youtube-iframe";
import { loadDarkModeState } from "./AsyncStorage";
import Timer from "./Timer";

const RoomRecipe = () => {
  const route = useRoute();
  const { recipe } = route.params;
  const { height, width } = useWindowDimensions();
  const [isPortrait, setIsPortrait] = useState(height > width);
  const [darkmode, setDarkMode] = useState(false);

  useEffect(() => {
    const loadDarkMode = async () => {
      const storedDarkMode = await loadDarkModeState();
      setDarkMode(storedDarkMode);
      console.log("loading darkmode state");
    };

    loadDarkMode();
  }, []);

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
          darkmode ? styles.darkIngredientText : styles.lightIngredientText,
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
          darkmode ? styles.darkProcedureText : styles.lightProcedureText,
          checkedProcedure[index] && styles.strikethrough,
        ]}
      >
        {item}
      </Text>
    </View>
  );

  return (
    <View
      style={darkmode ? styles.darkContainer : styles.lightContainer}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
     <YoutubePlayer
        height={isPortrait ? width * 0.6 : width * 0.3} 
        play={true}
        videoId={recipe.videoId}
      />
        <ScrollView>
        <Text style={styles.title}>{recipe.title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.cookingTime}>⏱️ Cooking Time: {recipe.cookingTime} minutes</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.originCountry}>🌎 Country of Origin: {recipe.originCountry}</Text>
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

        <Timer/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FCF9F2",
  },
  darkContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#323233",
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
    borderRadius: 8,
    color: "white",
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
    paddingLeft: 10,
    borderRadius: 10,
    color: "white",
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
    fontSize: 18,
    marginLeft: 10,
  },
  procedureList: {
    marginTop: 10,
  },
  procedureStep: {
    textAlign: "justify",
    fontSize: 18,
    marginLeft: 5,
    marginRight: 50,
    overflow: "visible",
  },
  cookingTime: {
    margin: 2,
    color: "white",
    backgroundColor: "#BA0001",
    padding: 5,
    borderRadius: 10,
  },
  originCountry: {
    margin: 2,
    color: "white",
    backgroundColor: "#22B14C",
    padding: 5,
    borderRadius: 10,
  },
  lightIngredientText: {
    fontSize: 20,
  },
  lightProcedureText: {
    fontSize: 20,
    textAlign: "justify",
    marginRight: 50
  },
  darkIngredientText: {
    fontSize: 20,
    color: "white",
  },
  darkProcedureText: {
    fontSize: 20,
    textAlign: "justify",
    marginRight: 50,
    color: "white",
  }
});

export default RoomRecipe;

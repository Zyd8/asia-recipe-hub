import React from "react";
import { StyleSheet, SafeAreaView, ImageBackground} from "react-native";

import HomeSpotlight from "./HomeSpotlight";
import RecipeList from "./RecipeList";

const HomeRecipe = () => {
  return (
    <SafeAreaView style={styles.container}>     
        <HomeSpotlight />
        <RecipeList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFE1A8",
    paddingBottom: 10,
  },
});

export default HomeRecipe;

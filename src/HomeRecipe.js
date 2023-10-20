import React from "react";
import { StyleSheet, SafeAreaView, ImageBackground} from "react-native";

import RecipeList from "./RecipeList";

const HomeRecipe = () => {
  return (
    <SafeAreaView style={styles.container}>     
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

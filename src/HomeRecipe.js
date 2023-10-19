import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import HomeHeader from "./HomeHeader";
import HomeSpotlight from "./HomeSpotlight";
import RecipeList from "./RecipeList";

const Home = () => {
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

export default Home;

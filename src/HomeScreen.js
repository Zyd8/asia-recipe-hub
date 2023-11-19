import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import RecipeLoader from "./RecipeLoader";
import Spotlight from "./Spotlight";

const Home = ({ darkmode }) => {
  return (
    <SafeAreaView style={darkmode ? styles.darkContainer : styles.lightContainer}>
      <Spotlight />
      <RecipeLoader />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: "#FFE1A8",
  },
  darkContainer: {
    backgroundColor: "#323233",
  },
});

export default Home;

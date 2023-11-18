import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { loadDarkModeState } from "./AsyncStorage";
import RecipeLoader from "./RecipeLoader";
import Spotlight from "./Spotlight";

const Home = ({ darkmode, forceRerender }) => {
  useEffect(() => {
    const loadDarkMode = async () => {
      const storedDarkMode = await loadDarkModeState();
      setDarkMode(storedDarkMode);
      console.log("loading darkmode state");
    };

    loadDarkMode();
  }, [forceRerender]);
  
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

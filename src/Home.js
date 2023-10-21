import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import RecipeLoader from "./RecipeLoader";
import Spotlight from "./Spotlight";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Spotlight/>
      <RecipeLoader/>
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

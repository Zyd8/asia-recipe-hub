import React, { useState } from "react";
import { FlatList, StyleSheet, KeyboardAvoidingView } from "react-native";

import Cards from "./Cards";
import Filter from "./Filter";

import { DATA } from "./data";

const RecipeLoader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(DATA);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filtered = DATA.filter((recipe) =>
      recipe.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <KeyboardAvoidingView 
      behavior={"height"}
      style={styles.container}
    >
      
    <Filter searchTerm={searchTerm} onSearch={handleSearch} />

    <FlatList
      data={filteredRecipes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Cards recipe={item} />}
    />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 580,
  }
})

export default RecipeLoader;

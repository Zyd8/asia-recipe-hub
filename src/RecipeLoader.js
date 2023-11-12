import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, KeyboardAvoidingView, Dimensions } from "react-native";

import Cards from "./Cards";
import Filter from "./Filter";

import { DATA } from "./data";

const RecipeLoader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(DATA);
  const [isLandscape, setIsLandscape] = useState(
    Dimensions.get("window").width > Dimensions.get("window").height
  );

  useEffect(() => {
    const updateOrientation = () => {
      setIsLandscape(Dimensions.get("window").width > Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateOrientation);

    return () => {
      Dimensions.removeEventListener("change", updateOrientation);
    };
  }, []);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filtered = DATA.filter((recipe) =>
      recipe.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  const handleFilterChange = (selectedCountry) => {
    console.log("Selected Country:", selectedCountry);

    if (!selectedCountry) {
      setFilteredRecipes(DATA);
      return;
    }

    const filtered = DATA.filter((recipe) =>
      recipe.originCountry.toLowerCase() === selectedCountry.toLowerCase()
    );
    setFilteredRecipes(filtered);
  };

  return (
    <KeyboardAvoidingView>
      <Filter
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onFilterChange={handleFilterChange} 
      />

      {isLandscape ? (
        <FlatList
          style={{ marginBottom: 180 }}
          key={"_"}
          data={filteredRecipes}
          keyExtractor={(item) => "_" + item.id}
          renderItem={({ item }) => <Cards recipe={item} />}
          numColumns={2}
        />
      ) : (
        <FlatList
          style={{ marginBottom: 580 }}
          key={"#"}
          data={filteredRecipes}
          keyExtractor={(item) => "#" + item.id}
          renderItem={({ item }) => <Cards recipe={item} />}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default RecipeLoader;

import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, KeyboardAvoidingView, Dimensions, useWindowDimensions} from "react-native";

import Cards from "./Cards";
import Filter from "./Filter";

import { DATA } from "./data";

const RecipeLoader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(DATA);
  const [orderBy, setOrderBy] = useState("Ascending");

  const { height, width } = useWindowDimensions();
  const [isPortrait, setIsPortrait] = useState(height > width);
  useEffect(() => {
    const handleOrientationChange = () => {
      const { height, width } = Dimensions.get("window");
      setIsPortrait(height > width);
    };

    Dimensions.addEventListener("change", handleOrientationChange);
  }, []);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filtered = DATA.filter((recipe) =>
      recipe.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  const handleFilterChange = (selectedCountry, selectedCookingTime, selectedDifficulty) => {
    console.log("Selected Country:", selectedCountry);
    console.log("Selected Cooking Time:", selectedCookingTime);
    console.log("Selected Difficulty:", selectedDifficulty);

    let filtered = [...DATA];
  
    if (selectedCountry && selectedCountry !== "All") {
      filtered = filtered.filter(
        (recipe) => recipe.originCountry.toLowerCase() === selectedCountry.toLowerCase()
      );
    }
  
    switch (selectedCookingTime) {
      case "15 to 30mins":
        filtered = filtered.filter(recipe => recipe.cookingTime >= 15 && recipe.cookingTime <= 30);
        break;
      case "30 to 60mins":
        filtered = filtered.filter(recipe => recipe.cookingTime >= 30 && recipe.cookingTime <= 60);
        break;
      case "60mins to 120mins":
        filtered = filtered.filter(recipe => recipe.cookingTime >= 60 && recipe.cookingTime <= 120);
        break;
      case "120mins above":
        filtered = filtered.filter(recipe => recipe.cookingTime > 120);
        break;
      default:
        break;
    }

    if (selectedDifficulty && selectedDifficulty !== "All") {
      filtered = filtered.filter(
        (recipe) => recipe.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()
      );
    }
  
    setFilteredRecipes(filtered);
  };
  
 
  const recipeAscending = [...filteredRecipes].sort((a, b) => 
    a.title > b.title ? 1 : -1
  );

  const recipeDescending = [...filteredRecipes].sort((a, b) => 
    a.title > b.title ? -1 : 1
  );

  const handleOrderBy = () => {
    const filtered = orderBy === "Ascending" ? recipeDescending : recipeAscending;
    setFilteredRecipes(filtered);
    setOrderBy(orderBy === "Ascending" ? "Descending" : "Ascending");
  };
  
  return (
    <KeyboardAvoidingView>
      <Filter
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onFilterChange={handleFilterChange} 
        onOrderBy={handleOrderBy}
      />

      <FlatList
        style={isPortrait ? styles.portraitCard : styles.landscapeCard}
        data={filteredRecipes}
        keyExtractor={(item) => item.id}
        horizontal={!isPortrait}
        renderItem={({ item }) => <Cards recipe={item} />}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  portraitCard: {
    height: "63%",
  },
  landscapeCard: {
    height: "100%",
  },
});



export default RecipeLoader;

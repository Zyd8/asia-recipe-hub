import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, useWindowDimensions, Dimensions } from 'react-native';
import { loadFaveState } from "./AsyncStorage";
import { DATA } from "./data";
import Cards from "./Cards";

const FavoriteScreen = () => {
  const { height, width } = useWindowDimensions();
  const [isPortrait, setIsPortrait] = useState(height > width);

  useEffect(() => {
    const handleOrientationChange = () => {
      const { height, width } = Dimensions.get("window");
      setIsPortrait(height > width);
    };

    Dimensions.addEventListener("change", handleOrientationChange);
  }, []);

  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const favoritePromises = DATA.map(async (recipe) => {
        const storedFavState = await loadFaveState(recipe.id);
        if (storedFavState) {
          return recipe;
        }
        return null;
      });

      Promise.all(favoritePromises).then((favorites) => {
        const filteredFavorites = favorites.filter((recipe) => recipe !== null);
        setFavoriteRecipes(filteredFavorites);
        console.log("loading favorite state");
      });
    };

    loadFavorites();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={isPortrait ? styles.portraitCard : styles.landscapeCard}
        data={favoriteRecipes}
        keyExtractor={(item) => item.id}
        horizontal={!isPortrait}
        renderItem={({ item }) => <Cards recipe={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  portraitCard: {
    // Your styles for portrait mode
  },
  landscapeCard: {
    // Your styles for landscape mode
  },
});

export default FavoriteScreen;

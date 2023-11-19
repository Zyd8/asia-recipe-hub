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
    marginTop: 50,
    width: "100%"
  },
  landscapeCard: {
    //height: "100%",
    margin: 90,
    marginBottom: 100,
    height: "300"
    
  },
});

export default FavoriteScreen;

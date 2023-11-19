import React, { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet, useWindowDimensions, Dimensions } from 'react-native';
import { loadFaveState } from "./AsyncStorage";
import { DATA } from "./data";
import Cards from "./Cards";
import { useFocusEffect } from '@react-navigation/native';
import { loadDarkModeState } from "./AsyncStorage";

const FavoriteScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  const [isPortrait, setIsPortrait] = useState(height > width);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const handleOrientationChange = () => {
      const { height, width } = Dimensions.get("window");
      setIsPortrait(height > width);
    };

    Dimensions.addEventListener("change", handleOrientationChange);
  }, []);

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

  useEffect(() => {
    loadFavorites();
  }, [isPortrait]);

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [navigation, isPortrait]) 
  );

  const [darkmode, setDarkMode] = useState(false);

  const loadDarkMode = async () => {
    const storedDarkMode = await loadDarkModeState();
    setDarkMode(storedDarkMode);
    console.log("loading darkmode state");
  };
  
  useFocusEffect(
    React.useCallback(() => {
      loadDarkMode();
    }, [navigation, isPortrait]) 
  );


  return (
    <View style={darkmode ? styles.darkContainer : styles.lightContainer}>
      {favoriteRecipes.length === 0 ? (
        <Text style={darkmode ? styles.darkText : styles.lightText}>You don't have any favorite recipes yet.</Text>
      ) : (
        <FlatList
          style={isPortrait ? styles.portraitCard : styles.landscapeCard}
          data={favoriteRecipes}
          keyExtractor={(item) => item.id}
          horizontal={!isPortrait}
          renderItem={({ item }) => <Cards recipe={item} />}
        />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FCF9F2",
  },
  darkContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#323233",
  },
  portraitCard: {
    marginTop: 50,
    width: "100%"
  },
  landscapeCard: {
    height: "100%",
    marginTop: 100,
  },
  lightText: {
    fontSize: 18,
    color: "#AB8476",
  },
  darkText: {
    fontSize: 18,
    color: "white",
  },
});

export default FavoriteScreen;

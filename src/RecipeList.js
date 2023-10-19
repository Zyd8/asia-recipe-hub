import React from "react";
import { FlatList, View, StyleSheet} from "react-native";

import RecipeListCard from "./RecipeListCard";
import RoomRecipe from "./RoomRecipe";

// For

const data = [

	// 1st Country
  	{ 
	id: '1', 
  	title: 'Recipe 1', 
	image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.E8FbKUj-Pghveev110jaBAHaE8%26pid%3DApi&f=1&ipt=8adf59a47af06819b9b5ced6b1fbe6668d8480fcd1d1f3bb678b0ba3637e5bd8&ipo=images',
	ingredients: ["Egg"],
	cookingTime: "5 minutes",
	originCountry: "Philippines",
	procedure: "",
	},

  	{ 
	id: '2', 
  	title: 'Recipe 2', 
	image: 'https://www.wikihow.com/images/f/f9/Make-Lumpia-Intro.jpg',
	ingredients: ["Egg"],
	cookingTime: "5 minutes",
	originCountry: "Philippines",
	procedure: "",
	},

  	{ 
	id: '3', 
  	title: 'Recipe 2', 
	image: 'https://girlunspotted.files.wordpress.com/2015/09/kare-kare1.jpg',
	ingredients: ["Egg"],
	cookingTime: "5 minutes",
	originCountry: "Philippines",
	procedure: "",
	},

	// 1st Country
  	{ 
	id: '4', 
  	title: 'Recipe 2', 
  	image: 'https://uaemoments.awicdn.com/site-images/sites/default/files/e7awi-prod/article/2/b/291982/d4bf0b2d4ca5e270b1a3660e67cc56d7b7af3d6c-140718144810.jpg?preset=v3.0_970XDYN&rnd=12344&save-png=1',
	ingredients: ["Egg"],
	cookingTime: "5 minutes",
	originCountry: "Philippines",
	procedure: "",
	},

	{
	id: '5', 
	title: 'Recipe 2', 
	image: 'https://uaemoments.awicdn.com/site-images/sites/default/files/e7awi-prod/article/2/b/291982/d4bf0b2d4ca5e270b1a3660e67cc56d7b7af3d6c-140718144810.jpg?preset=v3.0_970XDYN&rnd=12344&save-png=1',
	ingredients: ["Egg"],
	cookingTime: "5 minutes",
	originCountry: "Philippines",
	procedure: "",
	},

	{
	id: '6', 
	title: 'Recipe 2', 
	image: 'https://uaemoments.awicdn.com/site-images/sites/default/files/e7awi-prod/article/2/b/291982/d4bf0b2d4ca5e270b1a3660e67cc56d7b7af3d6c-140718144810.jpg?preset=v3.0_970XDYN&rnd=12344&save-png=1',
	ingredients: ["Egg"],
	cookingTime: "5 minutes",
	originCountry: "Philippines",
	procedure: "",
	},

	// 3rd Country
	{
	id: '7', 
	title: 'Recipe 2', 
	image: 'https://uaemoments.awicdn.com/site-images/sites/default/files/e7awi-prod/article/2/b/291982/d4bf0b2d4ca5e270b1a3660e67cc56d7b7af3d6c-140718144810.jpg?preset=v3.0_970XDYN&rnd=12344&save-png=1',
	ingredients: ["Egg"],
	cookingTime: "5 minutes",
	originCountry: "Philippines",
	procedure: "",
	},

	{
	id: '8', 
	title: 'Recipe 2', 
	image: 'https://uaemoments.awicdn.com/site-images/sites/default/files/e7awi-prod/article/2/b/291982/d4bf0b2d4ca5e270b1a3660e67cc56d7b7af3d6c-140718144810.jpg?preset=v3.0_970XDYN&rnd=12344&save-png=1',
	ingredients: ["Egg"],
	cookingTime: "5 minutes",
	originCountry: "Philippines",
	procedure: "",
	},

	{
	id: '9', 
	title: 'Recipe 2', 
	image: 'https://uaemoments.awicdn.com/site-images/sites/default/files/e7awi-prod/article/2/b/291982/d4bf0b2d4ca5e270b1a3660e67cc56d7b7af3d6c-140718144810.jpg?preset=v3.0_970XDYN&rnd=12344&save-png=1',
	ingredients: ["Egg"],
	cookingTime: "5 minutes",
	originCountry: "Philippines",
	procedure: "",
	},
];

const RecipeList = () => {
	return (
		<View style={styles.container}>
			<FlatList 
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <RecipeListCard recipe={item} />}
			/>
		</View>
  	);
};

const styles = StyleSheet.create({ 
  	container: {
		marginBottom: 550,
  	},
});

export default RecipeList;

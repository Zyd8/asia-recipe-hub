import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";

import RoomRecipe from "./RoomRecipe";

const RecipeListCard = ({ recipe }) => {

	const handleRecipeCardPress = () => {
		console.log("Pressed Card " + recipe.id);
  	}

  	return (
		<View style={styles.cardContainer}>
			<TouchableOpacity onPress={handleRecipeCardPress}>
				<Image source={{ uri: recipe.image }} style={styles.image} />
					<View style={styles.textContainer}>
					<Text style={styles.recipeTitle}>{recipe.title}</Text>
				</View>
			</TouchableOpacity>
		</View>
  	);
};

const styles = StyleSheet.create({
	cardContainer: {
		borderRadius: 20,
		overflow: "hidden",
		marginBottom: 20,
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: "#fff", 
		borderColor: "#ccc",
		shadowColor: "#000", 
		shadowOffset: {
		width: 0,
		height: 2,
		},
		shadowOpacity: 0.5, 
		shadowRadius: 3.84,
		elevation: 5, 
  	},
  	image: {
    	height: 220,
  	},
	textContainer: {
		padding: 10,
	},
	recipeTitle: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default RecipeListCard;

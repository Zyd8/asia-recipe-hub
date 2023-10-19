import React, { useState } from "react";
import { FlatList, View, StyleSheet} from "react-native";

import RecipeListCard from "./RecipeListCard";
import HomeHeader from "./HomeHeader";

const data = [

	// 1st Country
  	{ 
	id: '1', 
  	title: 'Adobo', 
	image: require('./img/adobo.jpeg'),
	ingredients: ["2 tablespoons vegetable oil", 
				"1 (3 pound) chicken, cut into pieces",
				"1 large onion, quartered and sliced",
				"2 tablespoons minced garlic",
				"⅔ cup low sodium soy sauce",
				"⅓ cup white vinegar",
				"1 tablespoon garlic powder",
				"2 teaspoons black pepper",
				"1 bay leaf"
			],
	cookingTime: "1 hour, 5 minutes",
	originCountry: "Philippines",
	procedure: [
		"1. Heat vegetable oil in a large skillet over medium-high heat. Cook chicken pieces until golden brown, 2 to 3 minutes per side. Transfer chicken to a plate and set aside.",
		"2. Add onion and garlic to the skillet; cook until softened and brown, about 6 minutes.",
		"3. Pour in soy sauce and vinegar and season with garlic powder, black pepper, and bay leaf",
		"4. Return chicken to pan, increase heat to high, and bring to a boil. Reduce heat to medium-low, cover, and simmer until chicken is tender and cooked through, 35 to 40 minutes."
		],
	},

	{
	id: '2',
	title: 'Sinigang',
	image: require('./img/sinigang.jpeg'),
	ingredients: ["1 lb pork ribs", "1 eggplant", "1 radish", "1 green pepper", "4 cups water", "1 packet sinigang mix"],
	cookingTime: "1 hour",
	originCountry: "Philippines",
	procedure: [
		"1. In a large pot, add water and bring to a boil.",
		"2. Add pork ribs and cook until tender.",
		"3. Add vegetables and sinigang mix. Simmer until vegetables are cooked.",
	],
	},
	{
	id: '3',
	title: 'Sisig',
	image: require('./img/sisig.jpeg'),
	ingredients: ["1 lb pig ears", "1 onion", "1 red chili pepper", "2 tbsp soy sauce", "2 tbsp calamansi juice"],
	cookingTime: "45 minutes",
	originCountry: "Philippines",
	procedure: [
		"1. Boil pig ears until tender, then grill until crispy.",
		"2. Chop pig ears into small pieces.",
		"3. Sauté chopped pig ears with onions, chili pepper, soy sauce, and calamansi juice.",
	],
	},
	{
	id: '4',
	title: 'Peking Duck',
	image: require('./img/pekingduck.jpeg'),
	ingredients: ["1 whole duck", "5-spice powder", "Salt", "Maltose syrup", "Cucumber", "Pancakes"],
	cookingTime: "2 hours",
	originCountry: "China",
	procedure: [
		"1. Clean and season the duck with 5-spice powder and salt.",
		"2. Air-dry the duck for several hours.",
		"3. Roast the duck, basting with maltose syrup until crispy.",
		"4. Serve with pancakes and sliced cucumber.",
	],
	},
	{
	id: '5',
	title: 'Kung Pao Chicken',
	image: require('./img/kungpaochicken.jpeg'),
	ingredients: ["1 lb chicken breast", "1/2 cup peanuts", "3 cloves garlic", "3 dried red chili peppers"],
	cookingTime: "30 minutes",
	originCountry: "China",
	procedure: [
		"1. Cut chicken into small cubes and marinate with soy sauce and cornstarch.",
		"2. Stir-fry chicken in a hot wok until cooked. Remove and set aside.",
		"3. In the same wok, stir-fry garlic and dried chili peppers.",
		"4. Add peanuts and cooked chicken. Stir-fry with sauce.",
	],
	},
	{
	id: '6',
	title: 'Dumplings',
	image: require('./img/dumpling.jpeg'),
	ingredients: ["1 lb ground pork", "Napa cabbage", "Green onions", "Ginger", "Wonton wrappers"],
	cookingTime: "45 minutes",
	originCountry: "China",
	procedure: [
		"1. Mix ground pork, finely chopped cabbage, green onions, and ginger.",
		"2. Place a spoonful of filling on a wonton wrapper. Seal and shape the dumplings.",
		"3. Boil or steam dumplings until cooked. Serve with dipping sauce.",
	],
	},
	{
	id: '7',
	title: 'Sashimi',
	image: require('./img/sashimi.jpeg'),
	ingredients: ["Fresh raw fish (e.g., salmon, tuna)", "Soy sauce", "Wasabi", "Pickled ginger"],
	cookingTime: "15 minutes",
	originCountry: "Japan",
	procedure: [
		"1. Slice fresh raw fish into thin pieces.",
		"2. Serve with soy sauce, wasabi, and pickled ginger.",
	],
	},
	{
	id: '8',
	title: 'Soba',
	image: require('./img/soba.jpeg'),
	ingredients: ["Soba noodles", "Soy sauce", "Mirin", "Dashi broth", "Scallions", "Wasabi"],
	cookingTime: "20 minutes",
	originCountry: "Japan",
	procedure: [
		"1. Cook soba noodles until al dente, then rinse with cold water.",
		"2. Serve with a dipping sauce made from soy sauce, mirin, and dashi broth.",
		"3. Garnish with scallions and wasabi.",
	],
	},
	{
	id: '9',
	title: 'Sushi',
	image: require('./img/sushi.jpeg'),
	ingredients: ["Sushi rice", "Fresh fish (e.g., salmon, tuna)", "Nori seaweed", "Cucumber", "Avocado"],
	cookingTime: "30 minutes",
	originCountry: "Japan",
	procedure: [
		"1. Prepare sushi rice and let it cool.",
		"2. Lay out a sheet of nori, add a layer of rice, and top with fish, cucumber, and avocado"
	],
	}	
];

const RecipeList = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredRecipes, setFilteredRecipes] = useState(data);
  
	const handleSearch = (text) => {
	  setSearchTerm(text);
	  const filtered = data.filter(recipe =>
		recipe.title.toLowerCase().includes(text.toLowerCase())
	  );
	  setFilteredRecipes(filtered);
	};
  
	return (
	  <View style={styles.container}>
		<HomeHeader
		  searchTerm={searchTerm}
		  onSearch={handleSearch} 
		  onSearchPress={() => handleSearch(searchTerm)} 
		/>
		<FlatList
		  data={filteredRecipes}
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
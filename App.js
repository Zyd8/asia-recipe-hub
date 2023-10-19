import { StatusBar } from "expo-status-bar";
import {SafeAreaView, StyleSheet} from "react-native";

import RecipeList from "./src/RecipeList";
import HomeHeader from "./src/HomeHeader";
import HomeSpotlight from "./src/HomeSpotlight";

export default function App() {
  	return (
    	<SafeAreaView style={styles.container}>
      		<HomeHeader/>
			<HomeSpotlight/>
      		<RecipeList/>
    	</SafeAreaView>
  	);
}
//<HomeSpotlight/>

const styles = StyleSheet.create({
  	container: {
    	backgroundColor: "#FFE1A8",
  	},
});

// Margin = internally occupies space
// Padding = externally occupies space
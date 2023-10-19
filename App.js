import { StatusBar } from "expo-status-bar";
import {SafeAreaView, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import RoomRecipe from "./src/RoomRecipe";
import HomeRecipe from "./src/HomeRecipe";

const Stack = createStackNavigator();

export default function App() {
  	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeRecipe} />
				<Stack.Screen name="Recipe" component={RoomRecipe} />
			</Stack.Navigator>
		</NavigationContainer>
  	);
}
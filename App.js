import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RoomRecipe from "./src/RoomRecipe";
import Home from "./src/Home";
import MeasurementPopUp from "./src/MeasurementPopUp"; 

const Stack = createStackNavigator();

export default function App() {
  const [isMeasurementPopUpVisible, setMeasurementPopUpVisible] = useState(false);

  const handleMeasurementPopUp = () => {
    setMeasurementPopUpVisible(true);
  };

  const handleCloseMeasurementPopUp = () => {
    setMeasurementPopUpVisible(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => (
              <TouchableOpacity onPress={handleMeasurementPopUp} style={{ marginRight: 15 }}>
                <Image source={require("./src/img/measurementcup.png")} style={{ height: 30, width: 30 }} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Recipe" component={RoomRecipe} />
      </Stack.Navigator>

      <MeasurementPopUp isVisible={isMeasurementPopUpVisible} onClose={handleCloseMeasurementPopUp} />
    </NavigationContainer>
  );
}

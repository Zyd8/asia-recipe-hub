import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Image, TouchableOpacity, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RoomRecipe from "./src/RoomRecipe";
import Home from "./src/Home";
import MeasurementPopUp from "./src/MeasurementPopUp"; 

const Stack = createStackNavigator();

export default function App() {
  const [darkmode, setDarkMode] = useState(require("./src/img/lightmode.png"))
  const [isMeasurementPopUpVisible, setMeasurementPopUpVisible] = useState(false);

  const handleMeasurementPopUp = () => {
    setMeasurementPopUpVisible(true);
  };

  const handleCloseMeasurementPopUp = () => {
    setMeasurementPopUpVisible(false);
  };

  const handleDarkMode = () => {
    setDarkMode((prevDarkMode) =>
      prevDarkMode === require("./src/img/lightmode.png")
        ? require("./src/img/darkmode.png")
        : require("./src/img/lightmode.png")
    );
    console.log("yay");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => (
              <View style={{flexDirection: "row"}}>
                <TouchableOpacity onPress={handleDarkMode} style={{ marginRight: 15 }}>
                  <Image source={darkmode} style={{ 
                    height: 30, 
                    width: 30, 
                    marginTop: 5}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleMeasurementPopUp} style={{ marginRight: 15 }}>
                  <Image source={require("./src/img/measurementcup.png")} style={{ 
                    height: 25, 
                    width: 25, 
                    marginTop: 5}} />
                </TouchableOpacity>
              </View>
            )
          }}
        />
        <Stack.Screen 
          name="Recipe" 
          component={RoomRecipe}
          options={{
            headerRight: () => (
              <TouchableOpacity onPress={handleMeasurementPopUp} style={{ marginRight: 15 }}>
                <Image source={require("./src/img/measurementcup.png")} style={{ height: 25, width: 25, marginTop: 5 }} />
              </TouchableOpacity>
            ),
          }}
          />
      </Stack.Navigator>

      <MeasurementPopUp isVisible={isMeasurementPopUpVisible} onClose={handleCloseMeasurementPopUp} />
    </NavigationContainer>
  );
}

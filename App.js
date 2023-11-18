import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Image, TouchableOpacity, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RoomRecipe from "./src/RoomRecipe";
import HomeScreen from "./src/HomeScreen";
import MeasurementPopUp from "./src/MeasurementPopUp"; 
import FavoriteScreen from "./src/FavoriteScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackScreen = ({ darkmode, handleDarkMode }) => {
  const [isMeasurementPopUpVisible, setMeasurementPopUpVisible] = useState(false);

  const handleMeasurementPopUp = () => {
    setMeasurementPopUpVisible(true);
  };

  const handleCloseMeasurementPopUp = () => {
    setMeasurementPopUpVisible(false);
  };

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={handleDarkMode} style={{ height: 25, width: 25, marginRight: 20, marginTop: 2 }}>
                <Image source={darkmode ? require("./src/img/darkmode.png") : require("./src/img/lightmode.png")} style={{ height: 30, width: 30, marginTop: 5 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleMeasurementPopUp} style={{ height: 25, width: 25, marginRight: 12, marginTop: 5 }}>
                <Image source={require("./src/img/measurementcup.png")} style={{ height: 25, width: 25, marginTop: 5 }} />
              </TouchableOpacity>
              <MeasurementPopUp isVisible={isMeasurementPopUpVisible} onClose={handleCloseMeasurementPopUp} />
            </View>
          ),
        }}
      >
        {() => <HomeScreen darkmode={darkmode} />}
      </Stack.Screen>
      <Stack.Screen
        name="Recipe"
        component={RoomRecipe}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={handleMeasurementPopUp} style={{ marginRight: 15 }}>
              <Image source={require("./src/img/measurementcup.png")} style={{ height: 25, width: 25, marginTop: 10 }} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const TabScreen = ({ darkmode, handleDarkMode }) => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen
      name="Home"
      options={{
        tabBarIcon: ({ color, size }) => (
          <Image
            source={darkmode ? require("./src/img/darktabhome.png") : require("./src/img/lighttabhome.png")}
            style={{ width: size, height: size, marginTop: 8, tintColor: color }}
          />
        ),
      }}
    >
      {() => <StackScreen darkmode={darkmode} handleDarkMode={handleDarkMode} />}
    </Tab.Screen>
    <Tab.Screen
      name="Favorites"
      component={FavoriteScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Image
            source={darkmode ? require("./src/img/darktabheart.png") : require("./src/img/lighttabheart.png")}
            style={{ width: size, height: size, marginTop: 5, tintColor: color }}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  const [darkmode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <NavigationContainer>
      <TabScreen darkmode={darkmode} handleDarkMode={handleDarkMode} />
    </NavigationContainer>
  );
}
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



const StackScreen = () => {

  const [darkmode, setDarkMode] = useState(require("./src/img/lightmode.png"))
  const handleDarkMode = () => {
    setDarkMode((prevDarkMode) =>
      prevDarkMode === require("./src/img/lightmode.png")
        ? require("./src/img/darkmode.png")
        : require("./src/img/lightmode.png")
    );
    console.log("yay");
  };

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
      component={HomeScreen}
      options={{
        headerRight: () => (
          <View style={{flexDirection: "row"}}>
            <TouchableOpacity onPress={handleDarkMode} style={{ height: 25, width: 25, marginRight: 20, marginTop: 2  }}>
              <Image source={darkmode} style={{ 
                height: 30, 
                width: 30, 
                marginTop: 5}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleMeasurementPopUp} style={{ height: 25, width: 25, marginRight: 12, marginTop: 5 }}>
              <Image source={require("./src/img/measurementcup.png")} style={{ 
                height: 25, 
                width: 25, 
                marginTop: 5}} />
            </TouchableOpacity>
            <MeasurementPopUp isVisible={isMeasurementPopUpVisible} onClose={handleCloseMeasurementPopUp} />
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
            <Image source={require("./src/img/measurementcup.png")} style={{ height: 25, width: 25, marginTop: 10 }} />
          </TouchableOpacity>
        ),
      }}
      />
    </Stack.Navigator>
  )
}


const TabScreen = () => (
  <Tab.Navigator 
  screenOptions={{ headerShown: false,
  tabBarActiveTintColor: 'black', 
  tabBarInactiveTintColor: 'gray', 
  }}>
    <Tab.Screen
      name="Home"
      component={StackScreen}
      options={{
        tabBarIcon: () => (
          <Image source={require("./src/img/lighttabhome.png")} 
          style={{ width: 25, height: 25, marginTop: 8,}}/>
        ),
      }}
    />
    <Tab.Screen 
    name="Favorites" 
    component={FavoriteScreen} 
    options={{
      tabBarIcon: () => (
        <Image source={require("./src/img/lighttabheart.png")} 
        style={{ width: 25, height: 25, marginTop: 5 }}/>
      ),
    }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabScreen/>
    </NavigationContainer>
  );
}

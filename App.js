import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Image, TouchableOpacity, View, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { loadDarkModeState, saveDarkModeState } from "./src/AsyncStorage";

import RoomRecipe from "./src/RoomRecipe";
import HomeScreen from "./src/HomeScreen";
import MeasurementPopUp from "./src/MeasurementPopUp"; 
import FavoriteScreen from "./src/FavoriteScreen";
import Welcome from "./src/Welcome";

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
                <TouchableOpacity onPress={handleDarkMode} style={{ height: 25, width: 25, marginRight: 20, marginTop: 5 }}>
                  <Image source={darkmode ? require("./src/img/darkmodeicon.png") : require("./src/img/lightmodeicon.png")} style={{ height: 30, width: 30, marginTop: 5}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleMeasurementPopUp} style={{ height: 25, width: 50, marginRight: 12, marginTop: 10, justifyContent: "center", alignItems: "center"}}>
                  <Image source={darkmode ? require("./src/img/measurementcupdark.png") : require("./src/img/measurementcuplight.png")} style={{ height: 25, width: 25, marginTop: 5, justifyContent: "center", alignItems: "center"}} />
                  <Text style={{ fontSize: 8, textAlign: "center", color: darkmode ? "white" : "gray" }}>Measurements</Text>
                </TouchableOpacity>
                <MeasurementPopUp isVisible={isMeasurementPopUpVisible} onClose={handleCloseMeasurementPopUp} />
              </View>
            ),
            headerStyle: {
              backgroundColor: darkmode ? 'black' : 'white', 
            },
            headerTintColor: darkmode ? 'white' : 'black', 
          }}
        >
          {() => <HomeScreen darkmode={darkmode} />}
        </Stack.Screen>
      <Stack.Screen
        name="Recipe"
        component={RoomRecipe}
        options={{
          headerRight: () => (
          <TouchableOpacity onPress={handleMeasurementPopUp} style={{ height: 25, width: 50, marginRight: 12, marginTop: 10, justifyContent: "center", alignItems: "center"}}>
            <Image source={darkmode ? require("./src/img/measurementcupdark.png") : require("./src/img/measurementcuplight.png")} style={{ height: 25, width: 25, marginTop: 5, justifyContent: "center", alignItems: "center"}} />
            <Text style={{ fontSize: 8, textAlign: "center", color: darkmode ? "white" : "gray" }}>Measurements</Text>
          </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: darkmode ? 'black' : 'white', 
          },
          headerTintColor: darkmode ? 'white' : 'black', 
        }}
      />
    </Stack.Navigator>
  );
};

const TabScreen = ({ darkmode, handleDarkMode }) => {

  const [forceRerender, setForceRerender] = useState(0);

  const handleDarkModeButtonPress = () => {
    handleDarkMode(); 
    setForceRerender((prevForceRerender) => prevForceRerender + 1); 
  };

  return (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: darkmode ? 'black' : 'white',
      },
      tabBarActiveTintColor: "#AB8476", 
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
      {() => <StackScreen darkmode={darkmode} handleDarkMode={handleDarkModeButtonPress} forceRerender={forceRerender}/>}
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
)};

export default function App() {
  const [darkmode, setDarkMode] = useState(false);
  const [isWelcomeScreenVisible, setWelcomeScreenVisible] = useState(true);

  useEffect(() => {
    const loadDarkMode = async () => {
      const storedDarkMode = await loadDarkModeState();
      setDarkMode(storedDarkMode);
      console.log("loading darkmode state");
    };

    loadDarkMode();
  }, []);

  const handleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    saveDarkModeState(darkmode);
    console.log("saving darkmode state");
  }, [darkmode]);

  const handleCloseWelcomeScreen = () => {
    setWelcomeScreenVisible(false);
  };


  return (
    <NavigationContainer>
      {isWelcomeScreenVisible && (
        <Welcome isVisible={isWelcomeScreenVisible} onClose={handleCloseWelcomeScreen} />
      )}
      <TabScreen darkmode={darkmode} handleDarkMode={handleDarkMode} />
    </NavigationContainer>
  );
};


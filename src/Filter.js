import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const Filter = ({ searchTerm, onSearch }) => {
  const handleFilterPress = () => {
    console.log("Pressed");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search for a recipe!"
        value={searchTerm}
        onChangeText={onSearch}
      />
      <TouchableOpacity onPress={handleFilterPress}>
        <Image source={require("./img/filter.png")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#AB8476",
    marginTop: 5,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    height: 40,
    borderColor: "black",
    padding: 10,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: 10,
    padding: 3,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "white",
  },
});

export default Filter;

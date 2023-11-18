import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text, Button, Dimensions } from "react-native";
import Modal from "react-native-modal";
import SelectDropdown from 'react-native-select-dropdown';

const Filter = ({ searchTerm, onSearch, onFilterChange }) => {
  const country = ["All", "Philippines", "China", "Japan"];

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [modalWidth, setModalWidth] = useState(Dimensions.get("window").width * 0.9);
  const [modalHeight, setModalHeight] = useState(Dimensions.get("window").height * 0.6);

  useEffect(() => {
    const updateModalSize = () => {
      const width = Dimensions.get("window").width * 0.9;
      const height = Dimensions.get("window").height * 0.6;
      setModalWidth(width);
      setModalHeight(height);
    };

    Dimensions.addEventListener("change", updateModalSize);
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCountrySelect = (selectedItem) => {
    setSelectedCountry(selectedItem);
  };

  const handleFilterPress = () => {
    const actualCountry = selectedCountry === "All" ? "" : selectedCountry;
    onFilterChange(actualCountry);
    toggleModal();
  };

  const isLandscape = Dimensions.get("window").width > Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search for a recipe!"
        value={searchTerm}
        onChangeText={onSearch}
      />
      <TouchableOpacity onPress={toggleModal}>
        <Image source={require("./img/filter.png")} style={styles.icon} />
      </TouchableOpacity>
      {isLandscape ? (
        <Modal
          isVisible={isModalVisible}
          animationType="fade"
          transparent={true}
          style={{ height: modalHeight, width: modalWidth, justifyContent: 'center', alignItems: 'center'}}    
          onBackdropPress={toggleModal}
        >
          <View style={styles.modal}>
            <Text style={styles.header}>Filter By:</Text>
            <Text style={styles.header2}>Choose a Country: </Text>
            <SelectDropdown
              data={country}
              onSelect={handleCountrySelect}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />

            <View style={styles.filler}></View>
            <Button onPress={handleFilterPress} style={styles.confirms} title="Confirm Changes" />
          </View>
        </Modal>
      ) : (
        <Modal
          isVisible={isModalVisible}
          animationType="fade"
          transparent={true}
          style={{ height: modalHeight, width: modalWidth }}
          onBackdropPress={toggleModal}
        >
          <View style={styles.modal}>
            <Text style={styles.header}>Filter By:</Text>
            <Text style={styles.header2}>Choose a Country: </Text>
            <SelectDropdown
              data={country}
              onSelect={handleCountrySelect}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />

            <View style={styles.filler}></View>
            <Button onPress={handleFilterPress} style={styles.confirms} title="Confirm Changes" />
          </View>
        </Modal>
      )}
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
  modal: {
    width: 350,
    height: 300,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  headers2: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginRight: 40,
    fontSize: 20,
  },
  header2: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  filler: {
    margin: 20,
  },
  confirms: {},
});

export default Filter;

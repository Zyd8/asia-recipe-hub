import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import SelectDropdown from 'react-native-select-dropdown';

const Filter = ({ searchTerm, onSearch, onFilterChange }) => {
  const navigation = useNavigation();

  const country = ["Philippines", "China", "Japan"];

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(""); // Added state variable

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCountrySelect = (selectedItem) => {
    setSelectedCountry(selectedItem); // Update the state with the selected country
  };

  const handleFilterPress = () => {
    // Pass the selected country back to the parent component
    onFilterChange(selectedCountry);
    toggleModal(); // Close the modal
  };

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
      <Modal isVisible={isModalVisible} animationType="fade" transparent={true}>
        <TouchableOpacity
          style={styles.pressOut}
          activeOpacity={1}
          onPressOut={toggleModal}
        >
          <View style={styles.modal}>
            <Text style={styles.header}>Filter By:</Text>
            <Text style={styles.header2}>Choose a Country: </Text>
            <SelectDropdown
              data={country}
              onSelect={handleCountrySelect} // Use the function to update state
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />

            <View style={styles.filler}></View>
            <Button onPress={handleFilterPress} style={styles.confirms} title="Confirm Changes">
            </Button>
          </View>
        </TouchableOpacity>
      </Modal>
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
		fontSize:30,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom:30,
	},
	headers2: {
		flexDirection:'row',
		flexWrap:'wrap',
		marginRight: 40,
		fontSize:20,
	},
	header2: {
		fontSize: 20,
		marginTop:20,
		marginBottom: 30,
	},
	filler: {
		margin: 20,
	},
	confirms: {
		
	},
	pressOut: {
		width:'200%',
		height:'80%',
		marginTop: -20,
		marginLeft: -20,
		paddingTop: 150,
		padding: 20,
	},
});

export default Filter;

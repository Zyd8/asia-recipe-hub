import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text, Button, Dimensions } from "react-native";
import Modal from "react-native-modal";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import { loadDarkModeState } from "./AsyncStorage";
import { DATA } from "./data";
import { useFocusEffect } from '@react-navigation/native';

const Filter = ({ searchTerm, onSearch, onFilterChange, onOrderBy }) => {
  const country = ["All", "Philippines", "China", "Japan"];
  const cookTime = ["All", "15 to 30mins", "30 to 60mins", "60mins to 120mins", "120mins above"];
  const difficulty = ["All", "Easy", "Intermediate", "Advanced"];
  const [darkmode, setDarkMode] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCookingTime, setSelectedCookingTime] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [orderBy, setOrderBy] = useState ("Ascending");
  const [modalWidth, setModalWidth] = useState(Dimensions.get("window").width * 0.9);
  const [modalHeight, setModalHeight] = useState(Dimensions.get("window").height * 0.6);

  useFocusEffect(() => {
    const loadDarkMode = async () => {
      const storedDarkMode = await loadDarkModeState();
      setDarkMode(storedDarkMode);
      console.log("loading darkmode state");
    };

    loadDarkMode();
  }, []);


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

  const handleCookingTimeSelect = (selectedItem) => {
    setSelectedCookingTime(selectedItem);
  };

  const handleDifficultySelect = (selectedItem) => {
    setSelectedDifficulty(selectedItem);
  };

  const recipeAscending = [...DATA].sort((a, b) => 
    a.title > b.title ? 1 : -1
  );


  const recipeDescending = [...DATA].sort((a, b) => 
    a.title > b.title ? -1 : 1
  );


  const toggleOrderBy = () => {
    const newOrderBy = orderBy === "Ascending" ? recipeDescending : recipeAscending;
    setOrderBy(orderBy === "Ascending" ? "Descending" : "Ascending");
  };

  const handleFilterPress = () => {
    const actualCountry = selectedCountry === "All" ? "" : selectedCountry;



    onFilterChange(actualCountry, selectedCookingTime, selectedDifficulty);
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

      <TouchableOpacity onPress={onOrderBy}>
        <Image source={require("./img/orderButton.png")} style={styles.icon} />
      </TouchableOpacity>

      {isLandscape ? (
        <Modal
          isVisible={isModalVisible}
          animationType="fade"
          transparent={true}
          style={{ height: modalHeight, width: modalWidth, justifyContent: 'center', alignItems: 'center'}}    
          onBackdropPress={toggleModal}
        >
          <View style={[styles.modal2, darkmode ? styles.darkContainer : styles.lightContainer]}>
            <Text style={styles.header}>Filter By:</Text>
            <SelectDropdown
              defaultButtonText={"Country"}
              style={styles.dropdown}
              data={country}
              onSelect={handleCountrySelect}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
            <View style={styles.divider} />
            <SelectDropdown
              defaultButtonText={"Cooking Time"}
              style={styles.dropdown}
              data={cookTime}
              onSelect={handleCookingTimeSelect}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyleB}
              rowStyle={styles.dropdown2RowStyle}
              rowTextStyle={styles.dropdown2RowTxtStyle}
            />
            <SelectDropdown
              defaultButtonText={"Difficulty"}
              style={styles.dropdown}
              data={difficulty}
              onSelect={handleDifficultySelect}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown2DropdownStyleC}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
            <View style={styles.divider} />

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
          <View style={[styles.modal, darkmode ? styles.darkContainer : styles.lightContainer]}>
            <Text style={styles.header}>Filter By:</Text>
            <SelectDropdown
              defaultButtonText={"Country"}
              style={styles.dropdown}
              data={country}
              onSelect={handleCountrySelect}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
            <SelectDropdown
              defaultButtonText={"Cooking Time"}
              style={styles.dropdown}
              data={cookTime}
              onSelect={handleCookingTimeSelect}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown2RowStyle}
              rowTextStyle={styles.dropdown2RowTxtStyle}
            />
            <SelectDropdown
              defaultButtonText={"Difficulty"}
              style={styles.dropdown}
              data={difficulty}
              onSelect={handleDifficultySelect}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
            <View style={styles.divider} />

            <View style={styles.filler}></View>
            <Button onPress={handleFilterPress} style={styles.confirms} title="Confirm Changes" color={"#AB8476"}/>
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
    width: 250,
    height: 275,
    padding: 10,
    borderRadius: 30,
    marginLeft: 55,
    alignContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  modal2: {
    width: 250,
    height: 270,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 30,
    alignContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "white"
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
  dropdown1BtnStyle: {
  
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    marginBottom: 15,
  },
  dropdown1BtnTxtStyle: {color: '#444'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1DropdownStyleB: {backgroundColor: '#EFEFEF', height: 150},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444'},
  divider: {width: 12},
  dropdown2BtnStyle: {
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    marginBottom: -30
  },
  dropdown2BtnTxtStyle: {color: '#444', textAlign: 'center'},
  dropdown2DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown2DropdownStyleB: {backgroundColor: '#EFEFEF', height: 150},
  dropdown2DropdownStyleC: {backgroundColor: '#EFEFEF', height: 100},
  dropdown2RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {color: '#444'},
  confirms: {
    
  },
  lightContainer: {
    backgroundColor: "#FFE1A8",
  },
  darkContainer: {
    backgroundColor: "#323233",
  },
});

export default Filter;

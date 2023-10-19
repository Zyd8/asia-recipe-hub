import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity} from "react-native";

const HomeHeader = () => {
    const [inputValue, setInputValue] = useState('');
    
    const handleFilterPress = () => {
        console.log("Pressed");
    };

    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter text here"
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />
                <TouchableOpacity onPress={handleFilterPress}>
                    <Image source={require("./img/filter.png")} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flexDirection: 'row', 
		alignItems: 'center', 
		padding: 10,
	},
	textInput: {
		backgroundColor: "lightgrey",
		borderRadius: 10,
		flex: 1,
		height: 40,
		borderColor: "black",
		padding: 10,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		marginRight: 10
	},
	filterButton: {
		backgroundColor: "lightgrey",
		borderRadius: 10,
		marginLeft: 10, 
		padding: 3,
	},
	icon: {
		width: 30,
		height: 30,
		tintColor: "lightgrey", 
	},
});

export default HomeHeader;

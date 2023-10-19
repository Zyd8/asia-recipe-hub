import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity} from "react-native";

const HomeHeader = () => {
    const [inputValue, setInputValue] = useState('');
    
    const handleFilterPress = () => {
        
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
		backgroundColor: "#AB8476",
		flexDirection: 'row', 
		alignItems: 'center', 
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 5,
		paddingRight: 5,
	},
	textInput: {
		backgroundColor: "white",
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

export default HomeHeader;

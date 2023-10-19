import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';

const RoomRecipe = () => {
    const route = useRoute();
    const { recipe } = route.params;
    return (
        <View>
            <Text>{recipe.title}</Text>
            <Image source={{ uri: recipe.image }} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});

export default RoomRecipe;


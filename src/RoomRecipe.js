import React from "react";
import { View } from "react-native";

const RoomRecipe = (recipe) => {
    return (
        <View>
            <Text>{recipe.title}</Text>
        </View>
    );
};

export default RoomRecipe;

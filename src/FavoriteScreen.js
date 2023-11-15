import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorite Screen</Text>
      {/* Add your favorite content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FavoriteScreen;

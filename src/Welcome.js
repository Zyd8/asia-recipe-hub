import React from 'react';
import { Modal, View, Text, Button, Image, StyleSheet } from 'react-native';

const Welcome = ({ isVisible, onClose }) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <Image
          source={require('./img/sisig.jpeg')} // Replace with your app logo
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>Welcome to Mobile Recipe Hub!</Text>
        <Text style={styles.descriptionText}>
          Your one-stop app for all your recipe needs, focusing on delicious Asian cuisines.
        </Text>
        <Button title="Get Started" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
  },
  logo: {
    width: 150, // Adjust the width and height as needed
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Welcome;

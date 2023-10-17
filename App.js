import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeUI from "./src/components/HomeUI";

export default function App() {
  return (
    <View style={styles.container}>
      // This will load the HomeUI page
      <HomeUI/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

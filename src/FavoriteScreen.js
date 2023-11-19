import React, {useEffect, useState} from 'react';
import { View, FlatList, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import { DATA } from "./data";
import Cards from "./Cards";



const FavoriteScreen = (forceRerender) => {
  let newList = []
  useEffect(() => {
    const handleOrientationChange = () => {
      const { height, width } = Dimensions.get("window");
      setIsPortrait(height > width);
    };
    
    for(let i = 0;i<=DATA.length-1;i++){
      if(DATA[i].favorited){
        newList.push(DATA[i])
      }
    } 
    console.log("switch test")
    Dimensions.addEventListener("change", handleOrientationChange);
  }, [forceRerender]);
  

  console.log("List:",newList)
  const { height, width } = useWindowDimensions();
  const [isPortrait, setIsPortrait] = useState(height > width);
  
  return (
    <View style={styles.container}>
      <FlatList
        style={isPortrait ? styles.portraitCard : styles.landscapeCard}
        data={newList}
        keyExtractor={(item) => item.id}
        horizontal={!isPortrait}
        renderItem={({ item }) => <Cards recipe={item} />}
      />
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

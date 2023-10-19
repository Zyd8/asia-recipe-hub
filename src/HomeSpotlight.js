import Carousel from 'react-native-snap-carousel';
import { View, Image, StyleSheet} from "react-native";

const HomeSpotlight = () => {

    const data = [
        { image: {uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.E8FbKUj-Pghveev110jaBAHaE8%26pid%3DApi&f=1&ipt=8adf59a47af06819b9b5ced6b1fbe6668d8480fcd1d1f3bb678b0ba3637e5bd8&ipo=images'}},
        { image: {uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.E8FbKUj-Pghveev110jaBAHaE8%26pid%3DApi&f=1&ipt=8adf59a47af06819b9b5ced6b1fbe6668d8480fcd1d1f3bb678b0ba3637e5bd8&ipo=images'}},
        { image: {uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.E8FbKUj-Pghveev110jaBAHaE8%26pid%3DApi&f=1&ipt=8adf59a47af06819b9b5ced6b1fbe6668d8480fcd1d1f3bb678b0ba3637e5bd8&ipo=images'}},
    ];

    return (
        <View style={styles.carouselContainer}>
          <Carousel
            data={data}
            renderItem={({ item }) => (
              <View style={styles.slide}>
                <Image source={item.image} style={styles.image} />
              </View>
            )}
            sliderWidth={500}
            itemWidth={250}
            layout="default"
            firstItem={1}
            useScrollView={false}
            autoplay={true}            
            autoplayInterval={3000}
            loop={true}
          />
        </View>
    );      
}

const styles = StyleSheet.create({
    carouselContainer: {
      overflow: 'hidden',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
    },
    slide: {
      backgroundColor: 'transparent',
    },
    image: {
      width: 250,
      height: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 10
    },
});

export default HomeSpotlight;
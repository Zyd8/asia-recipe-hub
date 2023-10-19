import Carousel from 'react-native-snap-carousel';
import { View, Image, StyleSheet} from "react-native";

const HomeSpotlight = () => {

    const data = [
        { image: require('./img/sushi.jpeg')},
        { image: require('./img/soba.jpeg')},
        { image: require('./img/sashimi.jpeg')},
        { image: require('./img/dumpling.jpeg')},
        { image: require('./img/kungpaochicken.jpeg')},
        { image: require('./img/pekingduck.jpeg')},
        { image: require('./img/sisig.jpeg')},
        { image: require('./img/sinigang.jpeg')},
        { image: require('./img/adobo.jpeg')},
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
            firstItem={5}
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
      margin: 5,
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
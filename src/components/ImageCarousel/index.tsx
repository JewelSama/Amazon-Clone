import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, {useState, useCallback} from 'react'


const ImageCarousel = ({images}: {images: string[]}) => {
    const width = Dimensions.get("window").width;
    const [activeIndex, setActiveIndex] = useState(0);
   
    const onFlatListUpdate = useCallback(({viewableItems}) =>{
        if (viewableItems.length > 0){
        setActiveIndex(viewableItems[0].index || 0);
    }
    console.log(viewableItems);
}, []);


  return (
    <View style={styles.root}>
        <FlatList 
            data={images}
            renderItem={({item}) => (
                <Image style={[styles.image, {width: width - 40}]} source={{uri: item}} />
            )}
            horizontal
            showsHorizontalScrollIndicator= {false}
            snapToInterval={width - 20}
            snapToAlignment={'center'}
            decelerationRate={'fast'}
            viewabilityConfig={{
                viewAreaCoveragePercentThreshold: 50,
            }}
            onViewableItemsChanged={onFlatListUpdate}
        />
        <View style={styles.dots}>
        {images.map((image, index) =>(
            <View style={[styles.dot, {
                backgroundColor: index === activeIndex ? "#c9c9c9" : "#ededed"
            }
            ]} />
        ))}
    </View>
    </View> 
  )
}


const styles = StyleSheet.create({
    root:{

    },
    image:{
        margin: 10,
        height: 250,
        resizeMode: 'contain'
    },
    dots:{
        flexDirection: 'row',
        justifyContent: 'center'

    },
    dot:{
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: "#ededed",
        borderColor: "#c9c9c9",
        margin: 5
    }
});

export default ImageCarousel;

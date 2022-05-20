import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import styles from './styles';
import product from '../../data/product'
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);
    // console.warn(selectedOption);
    return (
    <View style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
 

        <ImageCarousel images={product.images} />

        {/* option <Selector></Selector> */}

        <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue) =>  setSelectedOption(itemValue)}>

            {product.options.map(option =>(
               <Picker.Item label={option} value={option} />
           ))}

        </Picker>

      <Text style={styles.price}>${product.price}
            {product.oldPrice && <Text style={styles.oldPrice}>${product.oldPrice}</Text>}
        </Text>


        <Text style={styles.description}>{product.description}</Text>

        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />


         <Button text={"Add To Cart"} 
         onPress={() => {console.warn("Add to cart")}} 
                containerStyles={{backgroundColor: "#e3c905"}}
         />       
         <Button text="Buy Now" onPress={() => {}} />       

    </View>
  )
}

export default ProductScreen;

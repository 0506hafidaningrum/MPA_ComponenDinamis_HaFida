import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ideapad from './ideapad.png'


const Product = (props) => {
  return (
    <View style={styles.wrapper}>
        <Image source={ideapad} style={styles.imageProduct}></Image>
        <Text style={styles.productName}>New Lenovo Ideapad Slim 3</Text>
        <Text style={styles.productPrice}>Rp.16.799.000</Text>
        <Text style={styles.location}>Pati</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>BELI</Text>
          </View>
        </TouchableOpacity>
        
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
    wrapper: {padding: 12, backgroundColor: 'brown', width: 212,},
    imageProduct: {width:177, height: 107, borderRadius: 8},
    productName: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
    productPrice: {fontSize: 12, fontWeight:'bold', color: 'orange', marginTop: 12},
    location: {fontSize: 12, fontWeight: '300', marginTop: 12},
    buttonWrapper: {backgroundColor: 'green', paddingVertical: 6, borderRadius: 25,
        marginTop: 20
    },
    buttonText: {fontSize: 14, fontWeight:'600', color: 'white', textAlign: 'center'},
});
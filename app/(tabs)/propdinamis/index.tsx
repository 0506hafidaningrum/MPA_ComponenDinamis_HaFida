import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Story = props => {
  return(
    <View style={{alignItems: 'center', marginRight: 20}}>
    <Image source={{uri: props.gambar}} style={{width: 100, height: 100, borderRadius: 100/2}}></Image>
      <Text style={{maxWidth:60, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  )
}
const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
       <View style={{flexDirection: 'row'}}>
      <Story judul="Youtube Channel" gambar="https://i.pinimg.com/736x/14/fc/d1/14fcd189633936157ee354b6a092169d.jpg"></Story>
      <Story judul="Kelas Online" gambar="https://i.pinimg.com/736x/8f/27/12/8f27124230c62f53215cf0d9b7338483.jpg"></Story>
      <Story judul="Kabayan Coding" gambar="https://i.pinimg.com/736x/5d/16/52/5d16523b6734263a362f2297f5bb207b.jpg"></Story>
      <Story judul="Shoot" gambar="https://i.pinimg.com/enabled_lo_mid/736x/b4/e3/51/b4e3510960b0d967e157e9494b08575d.jpg"></Story>
      <Story judul="Food" gambar="https://i.pinimg.com/enabled_lo_mid/736x/a9/6e/45/a96e45fe30bd90bb75f724082e7a5654.jpg"></Story>
      <Story judul="Tamiya" gambar="https://i.pinimg.com/736x/55/6e/e1/556ee1e65e81ed5c779ebe86eea7d303.jpg"></Story>  
      </View> 
      </ScrollView>
           
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
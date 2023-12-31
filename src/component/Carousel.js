import { StyleSheet, Text, View,Image,Dimensions,LogBox } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";

const w=Dimensions.get('screen').width
const h=Dimensions.get('screen').height

const image=[
    require('../images/images/photo1.png'),
    require('../images/images/photo2.png'),
    require('../images/images/photo3.png')
]
const Carousel = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.slider}>
      <SliderBox images={image} style={styles.slider_box}/>
      </View>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    // cont:{
        
        
    // },
    slider_box:{
        width:w,
        height:h*.24,
        alignSelf:'center',
        
    },
    slider:{
        // marginVertical:h*.012,
        // marginHorizontal:w*.03,
        
        overflow:'hidden',
        elevation:5
    }
})
import React,{useEffect,useState,useContext} from 'react'
import {View,Image,StyleSheet,Dimensions} from 'react-native'
const w =Dimensions.get('window').width;
const h =Dimensions.get('window').height;
import { SliderBox } from "react-native-image-slider-box";
import { ContextAuth } from '../Context/Context';
export default function ImageSliderComponent(){

    const [product,setproduct]=useState('')
  const [contact,setcontact]=useState('')
  const data = useContext(ContextAuth)

    useEffect(()=>{
        const {productdetails,contactdetails} = data
        setcontact(contactdetails)
        setproduct(productdetails)
      },[])
    

    const image = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?tree",]

    return(
        <>
         
          <View  style={styles.container}>
             <SliderBox images={image} style={styles.banner}/>
             </View>

        </>
    )
}
const styles =StyleSheet.create({
    banner:{
        width:w,
        height:h*.4,
        position:'relative',
    }

})
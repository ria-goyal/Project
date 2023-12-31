import React,{useEffect,useState,useContext} from 'react'
import {View,Image,StyleSheet,Dimensions} from 'react-native'
const w =Dimensions.get('window').width;
const h =Dimensions.get('window').height;
import { SliderBox } from "react-native-image-slider-box";
import { ProductGetrequest } from '../Data/ProductAPI'
import { ContextAuth } from '../Context/Context';
export default function ImageSliderComponent(){

    const [product,setproduct]=useState(null)
    // const [img1,setimg1]=useState(null)
    // const [img2,setimg2]=useState(null)
//   const data = useContext(ContextAuth)
const getproductAPIdata = async () => {
    await ProductGetrequest().then(res => {
        // console.log(res.data);
        setproduct(res.data)
    })
        .catch(error => {
            console.log(error);
        })
    console.log("product ka data he img ke liye", product);
}


    useEffect(()=>{
        getproductAPIdata();
        console.log("img he ye dono",img1);
        console.log("img he ye dono",img2);
        // setimg1(String(product.G_img))
        // setimg2(String(product.C_img))
      },[])
    
      const img1 = product?.G_img || null;
      const img2 = product?.C_img || null;
  
      const image = [img1, img2];

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
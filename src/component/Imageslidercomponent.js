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

    const image1=[
       
    ]

    // product.forEach(e => {
    //     contact.forEach(e1 => {
    //         if(e.p_id==e1.id){
    //             var image=[
    //                 e.image
    //             ]
    //         }
    //     });
    // });
    return(
        <>
        {/* { product.map(d=>(
            contact.map(x=>(
                <>
                if(d.p_id==x.id){
                     <View  style={styles.container}>
                     <SliderBox images={{uri:d.image}} style={styles.banner}/>
                     </View>
                }
                </>
            ))
         ))} */}
         
          <View  style={styles.container}>
             <SliderBox images={image} style={styles.banner}/>
             </View>

             {/* <View>
             {
                product.forEach(e => {
                    contact.forEach(e1 => {
                        if(e.p_id==e1.id){
                            <View  style={styles.container}>
                            <SliderBox images={{uri:e.image}} style={{width:'100%',height:'100%'}}/>
                            </View>
                        }
                    });
                })
             }
             </View> */}
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
import React from 'react'
import {StyleSheet,Text,Image,Dimensions,View, useWindowDimensions} from 'react-native'
const w= Dimensions.get('window').width
const h= Dimensions.get('window').height
import review from '../images/logos/review.png'
import location from "../images/logos/location.png"
export default function Headercomponent(){
    return(
        <>
        <View style={style.container}>
            <View style={style.left_con}><Text style={style.logo}>Shoppie!</Text></View>
            <View style={style.right_con}>
                <View style={style.img_out}><Image source={location}/></View>
                <View style={style.img_out}><Image source={review}/></View>
            </View>
        </View>
        </>
    )
}
const style=StyleSheet.create(
    {
        container:{
            padding:w*.03,
            backgroundColor:'transparent',
            flexDirection:'row',
            
        },
        left_con:{
            flex:1,
            alignItems:'flex-start',
            
        },
        right_con:{
            flex:1,
           flexDirection:'row',
            alignItems:'flex-end',
            justifyContent:'flex-end',
            
        },
        logo:{
            fontSize:16,
            color:'black'
        },
        img_out:{
            paddingHorizontal:w*.01
        }
        
       
    }
)
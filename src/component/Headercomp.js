import React from 'react'
import {StyleSheet,Text,Image,Dimensions,View, useWindowDimensions,TouchableOpacity} from 'react-native'
const w= Dimensions.get('window').width
const h= Dimensions.get('window').height
import review from '../images/logos/review.png'
import location from "../images/logos/location.png"
import { colors } from '../global/style'
export default function Headercomponent(){
    return(
        <>
        <View style={style.container}>
            <View style={style.left_con}><Text style={style.logo}>Shoppie!</Text></View>
            <View style={style.right_con}>
                <View style={style.img_out}><Image source={location}/></View>
                <TouchableOpacity><View style={style.img_out}><Image source={review}/></View></TouchableOpacity>
            </View>
        </View>
        </>
    )
}
const style=StyleSheet.create(
    {
        container:{
            paddingHorizontal:w*.03,
            paddingVertical:h*.01,
            backgroundColor:'#756174',
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
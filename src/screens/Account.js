import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
const w = Dimensions.get('screen').width
const h = Dimensions.get('screen').height
import pic from '../images/images/p1.jpeg'
import del from '../images/logos/delete.png'
import heart from '../images/logos/heart.png'
import {hr_bar,colors,heading} from '../global/style'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Account = (navigation) => {

    async function Logout(){
        try {
            await AsyncStorage.setItem('Email', '');
            await AsyncStorage.setItem('Pass', '');
            alert('Logout successfully')
          }
          catch (e) {
            console.log(e);
          }
    }
    return (
        <>
            <View style={styles.container}>
                <View><Text style={heading}> Your Account</Text></View>
                <View style={styles.upper}>
                    <View style={styles.image_cont}><Image source={pic} style={styles.pics}/></View>
                    <View style={styles.textt}>
                        <View><Text style={styles.name}>Name</Text></View>
                        <View>
                            <TouchableOpacity style={styles.edit_btn}>
                            <Text style={styles.edit_btn_text}>+ Edit Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.btn}><Image source={heart}/></View>
                </View>
                <View style={hr_bar}></View>
                <View style={styles.lower}>
                    <View style={styles.cards}>
                        <View style={styles.img_card}><Image source={pic} style={styles.pics}/></View>
                        <View style={styles.card_txt}>
                            <Text style={styles.title}>Product Name</Text>
                            <Text style={styles.price}>Rate</Text>
                        </View>
                        <View style={styles.btn}>
                            <Image source={del} />
                        </View>
                    </View>
                </View>
                <View style={styles.logoutview}>
                   <TouchableOpacity style={styles.logoutbtn} onPress={Logout}>
                   <Text>LOG OUT</Text>
                   </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Account

const styles = StyleSheet.create({
    upper: {
        flexDirection: 'row',
        backgroundColor:'transparent',
        marginVertical:h*.01,
        marginHorizontal:w*.03,
        paddingHorizontal:w*.02,
        paddingVertical:h*.01
    },
    image_cont: {
        flex:1,
        height:h*.1,
        borderRadius:w*.5,
        overflow:'hidden'
    },
    textt: {
        flex: 2,
        paddingHorizontal:w*.04,
        paddingVertical:h*.01
    },
    btn:{
        flex:1,
        alignItems:'flex-end'
    },
    cards:{
        flexDirection:'row',
        marginHorizontal:w*.05,
        marginTop:h*.02,
        backgroundColor:'white',
        paddingHorizontal:w*.03,
        paddingVertical:h*.01,
        borderRadius:w*.03,
        elevation:10
    },
    img_card:{
        flex:1.3,
        height:h*.11,
        borderRadius:w*.04,
        overflow:'hidden'
    },
    pics:{
        width:'100%',
        height:'100%'
    },
    card_txt:{
        flex:2,
        padding:w*.03,
        
    },
    title:{
        color:'black',
        fontSize:18
    },
    price:{
        color:'black',
        fontSize:17
    },
    container:{
        backgroundColor:colors.back,
        flex:1
    },
    
    name:{
        fontSize:22,
        color:'black'
    },
    edit_btn_text:{
        color:'#1F4FBE',
        fontSize:16
    },
    logoutview:{
        alignItems:'center',
        marginTop:50
    },
    logoutbtn:{
        alignItems:'center',
        justifyContent:'center',
        height:40,
        backgroundColor:'red',
        width:80
    }
})
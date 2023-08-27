import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image,Dimensions } from 'react-native'
import React,{useState} from 'react'
import { heading,colors} from '../global/style'
const w = Dimensions.get('screen').width
const h = Dimensions.get('screen').height

const Freelance = () => {
    const [press,setPress]=useState(false)

  return (
    <View style={styles.container}>
      <View ><Text style={heading}>Enter Details</Text></View>
      <View style={styles.form}>
        <TextInput placeholder='Your Name' placeholderTextColor={'black'} style={styles.input_box}/>
        <TextInput placeholder='Requirements' placeholderTextColor={'black'} style={styles.input_box}/>
        <TextInput placeholder='Price offerred' placeholderTextColor={'black'} style={styles.input_box}/>
        <TextInput placeholder='Description (About the work)' placeholderTextColor={'black'} style={styles.input_box}/>
        <TextInput placeholder='Contact details' placeholderTextColor={'black'} style={styles.input_box}/>
        <TouchableOpacity style={press? styles.btn:styles.btn1} onPressIn={()=>setPress(true)} ><Text style={styles.btn_txt}>Post</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Freelance

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.back,
        flex:1
    },
    btn:{
        backgroundColor:'#B91438',
        width:w*.6,
        alignSelf:'center',
        marginVertical:h*.03,
        paddingHorizontal:w*.04,
        paddingVertical:h*.014,
        elevation:8
    },
    btn1:{
       
        backgroundColor:colors.purple,
        width:w*.6,
        alignSelf:'center',
        marginVertical:h*.03,
        paddingHorizontal:w*.04,
        paddingVertical:h*.014,
        elevation:8
    },
    btn_txt:{
        color:'white',
        textAlign:'center',
        fontSize:20
    },
    input_box:{
        borderWidth:1,
        borderColor:'black',
        marginHorizontal:w*.06,
        marginVertical:h*.02,
        borderRadius:w*.02,
        paddingHorizontal:w*.03,
        // paddingVertical:h*.012,
        color:'black',
        backgroundColor:colors.back,
        elevation:6
        
        
    },
    form:{
        marginTop:h*.025,
        
    }

})
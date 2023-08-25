import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
const w = Dimensions.get('screen').width
const h = Dimensions.get('screen').height
const Bar = () => {
  return (
    <View style={styles.container}>
      <View ><Text style={styles.text}>New Recommendations</Text></View>
    </View>
  )
}

export default Bar

const styles = StyleSheet.create({
    text:{
        color:'white',
        fontSize:18,
        textAlign:'left'
    },
    container:{
        backgroundColor:'#756174',
        padding:w*.018
    }
})
import { StyleSheet, Text, View ,Dimensions,TextInput} from 'react-native'
import React from 'react'
import { colors } from '../global/style'
const w = Dimensions.get('window').width
const h = Dimensions.get('window').height
const Search = () => {
  return (
    <View style={styles.cont}>
      <TextInput style={styles.search} placeholderTextColor={'purple'} placeholder='Search'/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    search:{
        backgroundColor:'white',
        width:w*.8,
        justifyContent:'center',
        alignSelf:'center',
        paddingHorizontal:w*.04,
        borderRadius:w*.5,
        marginVertical:h*.014,
        color:'black',
        elevation:10
    },
    cont:{
      backgroundColor:'#756174'
    }
})
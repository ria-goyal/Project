import { StyleSheet, Text, View ,Dimensions,TextInput} from 'react-native'
import React from 'react'
const w = Dimensions.get('window').width
const h = Dimensions.get('window').height
const Search = () => {
  return (
    <View>
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
        marginVertical:h*.01,
        color:'black',
        elevation:10
    },
})
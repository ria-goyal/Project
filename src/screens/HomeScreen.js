import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headercomponent from '../component/Headercomp'
import Search from '../component/search'
import {colors} from '../global/style'
import Corousel from '../component/corousel'
import Cards from '../component/cards'
import Bar from '../component/Bar'
const HomeScreen = () => {
  return (
    <>
    <View style={styles.container}>
    <Headercomponent/>
    <Search/>
    <Corousel/>
    <Bar/>
    <Cards/>
    </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
container:{
    backgroundColor:colors.back,
    flex:1
}
})
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import Headercomponent from '../component/Headercomp'
import Search from '../component/search'
import { colors } from '../global/style'
import Corousel from '../component/corousel'
import Cards from '../component/cards'
import Bar from '../component/Bar'
import heart from '../images/logos/heart.png'
const w = Dimensions.get('screen').width
const h = Dimensions.get('screen').height

export default function HomeScreen({ navigation }) {

  function Productcardshow() {
    return (
      <>
        <View style={styles.inner_container}>
          <TouchableOpacity onPress={Productcard}>
            <View style={styles.card}>
              <View style={styles.card_img}></View>
              <View style={styles.textbox}>
                <View>
                  <Text style={styles.card_text}>Product Name</Text>
                  <Text style={styles.card_text}>Rs.100/-</Text>
                </View>
                <View style={styles.btn}>
                  <TouchableOpacity>
                    <Image source={heart}></Image>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  function Productcard(){
    // navigation.navigate('productcard')
    alert('Login first')
    navigation.navigate('login')
}

  function Workcardshow() {
    return (
      <>
        <View style={styles.inner_container}>
          <TouchableOpacity onPress={Workcard}>
            <View style={styles.card}>
              <View style={styles.card_img}></View>
              <View style={styles.textbox}>
                <View>
                  <Text style={styles.card_text}>Name:</Text>
                  <Text style={styles.card_text}>Rs.100/-</Text>
                </View>
                <View style={styles.btn}>
                  <TouchableOpacity>
                    <Image source={heart}></Image>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  function Workcard(){
    // navigation.navigate('workcard')
    navigation.navigate('login')
    alert('Login first')
}
 

  return (
    <>
      <View style={styles.container}>
        <Headercomponent />
        <Search />
        <Corousel />
        <Bar />
        {/* <Cards/> */}
       <View style={styles.cards}>
       {Productcardshow()}
        {Workcardshow()}
       </View>
      </View>
    </>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.back,
    flex: 1
  },
  inner_container: {
    flexDirection: 'row',
    // backgroundColor:'red',
    marginHorizontal: w * .02,
    flexWrap: 'wrap'
  },
  card: {
    width: w * .44,
    backgroundColor: 'white',
    marginHorizontal: w * .02,
    marginVertical: h * .01,
    borderRadius: w * .05,
    overflow: 'hidden',
    elevation: 1
  },
  card_img: {
    height: h * .2,
    backgroundColor: 'pink'
  },
  card_text: {
    fontSize: 17,
    color: 'black'
  },
  textbox: {
    padding: w * .02,
    flexDirection: 'row',

  },
  btn: {
    marginHorizontal: w * .02,

  },
cards:{
  flexDirection:'row',
}
})
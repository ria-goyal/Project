import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React,  { useContext, useEffect, useState, } from 'react'
import Headercomponent from '../component/Headercomp'
import Search from '../component/search'
import { colors } from '../global/style'
import Corousel from '../component/corousel'
import Cards from '../component/cards'
import Bar from '../component/Bar'
// import Bottomnavigation from '../component/Bottomnavigationcomponent'
import heart from '../images/logos/heart.png'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { ContextAuth } from '../Context/Context';
import { NavigationContainer } from '@react-navigation/native'
const w = Dimensions.get('screen').width
const h = Dimensions.get('screen').height


export default function HomeScreen({ navigation }) {
  // console.log('details details',productdetails);
  const [product,setproduct]=useState('')
  const [work,setwork]=useState('')
  const data = useContext(ContextAuth)
  
  useEffect(()=>{
    const {productdetails,workdetails} = data
    setproduct(productdetails)
    setwork(workdetails)
  },[])

  function Renderproduct(item) {
  
    return (
      <>
        <View style={styles.inner_container}>
          <TouchableOpacity onPress={()=>Productcard(item)}>
            <View style={styles.card}>
              <View style={styles.card_img}></View>
              <View style={styles.textbox}>
                <View>
                  <Text style={styles.card_text}>{item.product_name}</Text>
                  <Text style={styles.card_text}>Rs.{item.product_rate}/-</Text>
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
  async function Productcard(item){
    // console.log("**********",item);
    navigation.navigate('productcard',{...item})
    // alert('Login first')
    // navigation.navigate('login')
  }

function Productcardshow() {
  return (
    <>
    <FlatList
    numColumns={2}
    data={product}
    renderItem={({item})=>Renderproduct(item)}
    keyExtractor={(one)=>one.key}
    />
    </>
  )
}

  function Renderwork(item) {
    return (
      <>
        <View style={styles.inner_container}>
          <TouchableOpacity onPress={()=>Workcard(item)}>
            <View style={styles.card}>
              <View style={styles.card_img}></View>
              <View style={styles.textbox}>
                <View>
                  <Text style={styles.card_text}>{item.work_name}</Text>
                  <Text style={styles.card_text}>Rs.{item.offer_rate}/-</Text>
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
  function Workcard(item){
    navigation.navigate('workcard',{...item})
    // navigation.navigate('login')
    // alert('Login first')
}
 
function Workcardshow() {
  return (
    <>
    <FlatList
    numColumns={2}
    data={work}
    renderItem={({item})=>Renderwork(item)}
    keyExtractor={(item)=>item.key}
    />
    </>
  )
}

  return (
    <>

      <View style={styles.container}>
        <Headercomponent />
        <Search />
        <Corousel />
        <Bar />
        {/* <Cards/> */}
      <ScrollView>
      <View style={styles.cards}>
       {Productcardshow()}
       </View>
        
      <View style={styles.cards}>
        {Workcardshow()}
       </View>
      </ScrollView>
       {/* <Bottomnavigation/> */}
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
  flexWrap:'wrap'
}
})
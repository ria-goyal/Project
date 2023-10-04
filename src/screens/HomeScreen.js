import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native'
import React, { useContext, useEffect, useState, } from 'react'
import Headercomponent from '../component/Headercomp'
import Search from '../component/search'
import { colors } from '../global/style'
import Corousel from '../component/corousel'
import Bar from '../component/Bar'
import heart from '../images/logos/heart.png'
import { FlatList,} from 'react-native-gesture-handler'
import { ContextAuth } from '../Context/Context';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ScrollView } from 'react-native-virtualized-view'
const w = Dimensions.get('screen').width
const h = Dimensions.get('screen').height


export default function HomeScreen({ navigation }) {
  // console.log('details details',productdetails);
  const [product, setproduct] = useState('')
  const [work, setwork] = useState('')
  const data = useContext(ContextAuth)

  useEffect(() => {
    const { productdetails, workdetails } = data
    setproduct(productdetails)
    setwork(workdetails)
  }, [])

  function Renderproduct(item) {
    return (
      <>
        <View style={styles.inner_container}>
          <TouchableOpacity onPress={() => Productcard(item)}>
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
  async function Productcard(item) {
    // console.log("**********",item);
    const email = await AsyncStorage.getItem('Email');
    const pass = await AsyncStorage.getItem('Pass');
    console.log('email ka data btao', email);
    if (email !== null && email !== undefined && email !== '' && pass !== null && pass !== undefined && pass !== '') {
      navigation.navigate('productcard', { ...item })
    }
    else {
      alert('Login first')
      navigation.navigate('login')
    }
  }

  function Productcardshow() {
    return (
      <>
        <FlatList
          numColumns={2}
          data={product}
          renderItem={({ item }) => Renderproduct(item)}
          keyExtractor={(item) => item.p_id}
        />
      </>
    )
  }

  function Renderwork(item) {
    return (
      <>
        <View style={styles.inner_container}>
          <TouchableOpacity onPress={() => Workcard(item)}>
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
  async function Workcard(item) {
    const email = await AsyncStorage.getItem('Email');
    const pass = await AsyncStorage.getItem('Pass');
    console.log('email ka data btao', email);
    if (email !== null && email !== undefined && email !== '' && pass !== null && pass !== undefined && pass !== '') {
      navigation.navigate('workcard', { ...item })
    }
    else {
      alert('Login first')
      navigation.navigate('login')
    }
  }

  function Workcardshow() {
    return (
      <>
        <FlatList
          numColumns={2}
          data={work}
          renderItem={({ item }) => Renderwork(item)}
          keyExtractor={(item) => item.w_id}
        />
      </>
    )
  }

  return (
    <>
      <View style={styles.container}>
        <Headercomponent />
        <Search />
        <ScrollView nestedScrollEnabled={true}>
          <Corousel />
          <Bar />
          <View style={styles.cards}>
            {Productcardshow()}
          </View>
          <View style={styles.cards}>
            {Workcardshow()}
          </View>
        </ScrollView>
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
  cards: {
    flexWrap: 'wrap'
  }
})
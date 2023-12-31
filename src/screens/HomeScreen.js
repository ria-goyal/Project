// <===================================================================Import-Section-Start===================================================================================>

import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, RefreshControl, SectionList, Linking } from 'react-native'
import React, { useEffect, useState, } from 'react'
import Headercomponent from '../component/Headercomp'
import { colors } from '../global/style'
import Carousel from '../component/Carousel'
import Bar from '../component/Bar'
import heart from '../images/logos/heart.png'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { WorkGetrequest } from '../Data/WorkAPI'
import { ProductGetrequest } from '../Data/ProductAPI'
import { FlashList } from "@shopify/flash-list";
import PushNotification from "react-native-push-notification";
const w = Dimensions.get('screen').width
const h = Dimensions.get('screen').height

// <===================================================================Import-Section-End===================================================================================>


// <===================================================================Logic-Section-Start===================================================================================>

export default function HomeScreen({ navigation }) {
  const [product, setproduct] = useState('')
  const [work, setwork] = useState('')
  const [refresh, setrefresh] = useState(false)

  useEffect(() => {
    getworkAPIdata();
    getproductAPIdata();
    Createchannel();
  }, [])

  // <==================Product-Section-Start======================>
  const getproductAPIdata = async () => {
    await ProductGetrequest().then(res => {
      // console.log(res.data);
      setproduct(res.data)
    })
      .catch(error => {
        console.log(error);
      })
  }

  function Productcardshow() {
    return (
      <>
        <View style={{ width: w, height: '50%' }}>
          <FlashList
            numColumns={2}
            data={product}
            renderItem={({ item }) => Renderproduct(item)}
            estimatedItemSize={200}
            keyExtractor={(item) => item._id}
            listKey="product"
          />
        </View>
      </>
    )
  }

  function Renderproduct(item) {
    return (
      <>
        <View style={styles.inner_container}>
          <TouchableOpacity onPress={() => Productcard(item)}>
            <View style={styles.card}>
              <View style={styles.card_img}></View>
              <View style={styles.textbox}>
                <View>
                  <Text style={styles.card_text}>{item.p_name}</Text>
                  <Text style={styles.card_text}>Rs.{item.p_rate}/-</Text>
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
    const email = await AsyncStorage.getItem('Email');
    const pass = await AsyncStorage.getItem('Pass');
    if (email !== null && email !== undefined && email !== '' && pass !== null && pass !== undefined && pass !== '') {
      navigation.navigate('productcard', { ...item })
    }
    else {
      alert('Login first')
      navigation.navigate('login')
    }
  }
  // <==================Product-Section-End======================>


  // <==================Work-Section-Start======================>
  const getworkAPIdata = async () => {
    await WorkGetrequest().then(res => {
      // console.log(res.data);
      setwork(res.data)
    })
      .catch(error => {
        console.log(error);
      })
  }

  function Workcardshow() {
    return (
      <>
        <View style={{ width: w, height: '50%' }}>
          <FlashList
            numColumns={2}
            data={work}
            renderItem={({ item }) => Renderwork(item)}
            estimatedItemSize={200}
            keyExtractor={(item) => item._id}
            listKey="work"
          />
        </View>
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
                  <Text style={styles.card_text}>{item.w_name}</Text>
                  <Text style={styles.card_text}>Rs.{item.w_rate}/-</Text>
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


  // <==================Work-Section-End======================>


  // <==================Other-Section-Start======================>
  const Pullme = () => {
    setrefresh(true);
    // console.log("shuru hua");
    try {
      Promise.all([getworkAPIdata(), getproductAPIdata()]).then(() => {
        setrefresh(false);
        // console.log("khatam hua");
      });
    } catch (error) {
      console.error("Error in pull to refresh:", error);
      setrefresh(false);
    }
  };

  function Createchannel() {
    PushNotification.createChannel(
      {
        channelId: 'channel-id',
        channelName: 'Channel Name',
        channelDescription: 'Channel Description',
        playSound: true,
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      // (created) => console.log(`Channel created: ${created}`),
    );
  }
  // <==================Other-Section-End======================>

  // <===================================================================Logic-Section-End===================================================================================>


  // <===================================================================Frontend-Section-Start===================================================================================>
  return (
    <>
      <View style={styles.container}>
        <Headercomponent />
        <SectionList
          sections={[
            { title: 'carousel', data: [1] },
            { title: 'bar', data: [2] },
            { title: 'products', data: [product], key: 'product' },
            { title: 'works', data: [work], key: 'work' },
          ]}
          renderItem={({ section }) => {
            switch (section.title) {
              case 'carousel':
                return <Carousel />;
              case 'bar':
                return <Bar />;
              case 'products':
                return <Productcardshow />;
              case 'works':
                return <Workcardshow />;
              default:
                return null;
            }
          }}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={<RefreshControl refreshing={refresh} onRefresh={Pullme} />}
        />
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
    elevation: 20
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
// <===================================================================Frontend-Section-End===================================================================================>

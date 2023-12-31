// <===================================================================Import-Section-Start===================================================================================>

import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Dimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { heading, colors } from '../global/style'
import { WorkPostrequest } from '../Data/WorkAPI'
import { WorkDeleteNotification } from '../Notifications/Notifications'
import AsyncStorage from '@react-native-async-storage/async-storage';
const w = Dimensions.get('screen').width
const h = Dimensions.get('screen').height
// <===================================================================Import-Section-End===================================================================================>


// <===================================================================Logic-Section-Start===================================================================================>

export default function Freelance() {

  const [Press, setPress] = useState(false)
  const [wname, setname] = useState('')
  const [Requirements, setRequirements] = useState('')
  const [Price, setPrice] = useState('')
  const [Description, setDescription] = useState('')
  const [email, setemail] = useState('')
  const [Cnumber, setCnumber] = useState('')
  const [Cname, setCname] = useState('')

  async function Post() {

    const Email =  await AsyncStorage.getItem('Email');
    if (Email == email) {
      const params = {
        "w_name": wname,
        "w_req": Requirements,
        "w_rate": Price,
        "w_des": Description,
        "c_name": Cname,
        "c_number": Cnumber,
        "e_mail": email
      }
  
      await WorkPostrequest(params).then(res => {
        console.log(res.data);
        console.log("work ka data he", params);
        WorkDeleteNotification();
      })
        .catch(error => {
          console.log(error);
        })
  
      setPress(!Press)
      setname('')
      setRequirements('')
      setPrice('')
      setDescription('')
      setemail('')
      setCname('')
      setCnumber('')
    } else {
      alert('entered email should be same as login email')
    }
  }

// <===================================================================Logic-Section-End===================================================================================>


// <===================================================================Frontend-Section-Start===================================================================================>

  return (
    <View style={styles.container}>
      <View ><Text style={heading}>Enter Details</Text></View>
      <ScrollView>
        <View style={styles.form}>
          <TextInput value={wname} onChangeText={(d) => setname(d)} placeholder='Your Name' placeholderTextColor={'black'} style={styles.input_box} />
          <TextInput value={Requirements} onChangeText={(d) => setRequirements(d)} placeholder='Requirements' placeholderTextColor={'black'} style={styles.input_box} />
          <TextInput value={Price} onChangeText={(d) => setPrice(d)} placeholder='Price offerred' placeholderTextColor={'black'} style={styles.input_box} />
          <TextInput value={Description} onChangeText={(d) => setDescription(d)} placeholder='Description (About the work)' placeholderTextColor={'black'} style={styles.input_box} />
          <TextInput value={Cname} onChangeText={(d) => setCname(d)} placeholder='name' placeholderTextColor={'black'} style={styles.input_box} />
          <TextInput value={Cnumber} onChangeText={(d) => setCnumber(d)} placeholder='number' placeholderTextColor={'black'} style={styles.input_box} />
          <TextInput value={email} onChangeText={(d) => setemail(d)} placeholder='email' placeholderTextColor={'black'} style={styles.input_box} />
        </View>
      </ScrollView>
      <TouchableOpacity style={Press ? styles.btn : styles.btn1} onPress={Post}><Text style={styles.btn_txt}>Post</Text></TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.back,
    flex: 1
  },
  btn: {
    backgroundColor: '#B91438',
    width: w * .6,
    alignSelf: 'center',
    marginVertical: h * .03,
    paddingHorizontal: w * .04,
    paddingVertical: h * .014,
    elevation: 8
  },
  btn1: {

    backgroundColor: colors.purple,
    width: w * .6,
    alignSelf: 'center',
    marginVertical: h * .03,
    paddingHorizontal: w * .04,
    paddingVertical: h * .014,
    elevation: 8
  },
  btn_txt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },
  input_box: {
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: w * .06,
    marginVertical: h * .02,
    borderRadius: w * .02,
    paddingHorizontal: w * .03,
    // paddingVertical:h*.012,
    color: 'black',
    backgroundColor: colors.back,
    elevation: 6
  },
  form: {
    marginTop: h * .025,

  }

})

// <===================================================================Frontend-Section-End===================================================================================>

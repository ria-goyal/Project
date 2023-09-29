import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { heading, colors } from '../global/style'
const w = Dimensions.get('screen').width
const h = Dimensions.get('screen').height

export default function Freelance() {

  const [Press, setPress] = useState(false)
  const [name, setname] = useState('')
  const [Requirements, setRequirements] = useState('')
  const [Price, setPrice] = useState('')
  const [Description, setDescription] = useState('')
  const [Cdetails, setCdetails] = useState('')

  function Post() {
    setPress(!Press)
    setname('')
    setRequirements('')
    setPrice('')
    setDescription('')
    setCdetails('')
  }

  return (
    <View style={styles.container}>
      <View ><Text style={heading}>Enter Details</Text></View>
      <View style={styles.form}>
        <TextInput value={name} onChangeText={(d) => setname(d)} placeholder='Your Name' placeholderTextColor={'black'} style={styles.input_box} />
        <TextInput value={Requirements} onChangeText={(d) => setRequirements(d)} placeholder='Requirements' placeholderTextColor={'black'} style={styles.input_box} />
        <TextInput value={Price} onChangeText={(d) => setPrice(d)} placeholder='Price offerred' placeholderTextColor={'black'} style={styles.input_box} />
        <TextInput value={Description} onChangeText={(d) => setDescription(d)} placeholder='Description (About the work)' placeholderTextColor={'black'} style={styles.input_box} />
        <TextInput value={Cdetails} onChangeText={(d) => setCdetails(d)} placeholder='Contact details' placeholderTextColor={'black'} style={styles.input_box} />
        <TouchableOpacity style={Press ? styles.btn : styles.btn1} onPress={Post}><Text style={styles.btn_txt}>Post</Text></TouchableOpacity>
      </View>
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
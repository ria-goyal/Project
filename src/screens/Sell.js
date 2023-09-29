import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, PermissionsAndroid } from 'react-native'
import React, { useState, } from 'react'
import { heading, colors } from '../global/style'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const w = Dimensions.get('screen').width
const h = Dimensions.get('screen').height

export default function Sell() {

  const [Press, setPress] = useState(false)
  const [Pname, setPname] = useState('')
  const [Category, setCategory] = useState('')
  const [Price, setPrice] = useState('')
  const [Bname, setBname] = useState('')
  const [Description, setDescription] = useState('')
  const [Cdetails, setCdetails] = useState('')
  const [galleryimage, setgalleryimage] = useState(null)
  const [cameraimage, setcameraimage] = useState(null)

  function Post() {
    setPress(!Press)
    setPname('')
    setCategory('')
    setPrice('')
    setBname('')
    setDescription('')
    setCdetails('')
  }

  const Galleryphoto = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('user cancelled');
      }
      else {
        setgalleryimage(response.assets[0].uri)
      }
    });
  };
  const Cameraphoto = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('user cancelled');
      }
      else {
        setcameraimage(response.assets[0].uri)
      }
    });
  };

  return (
    <View style={styles.container}>
      <View ><Text style={heading}>Enter Product Details</Text></View>
      <ScrollView>
        <View style={styles.form}>
          <TextInput value={Pname} onChangeText={(d) => setPname(d)} placeholder='Product Title/Name' placeholderTextColor={'black'} style={styles.input_box} />
          <TextInput value={Category} onChangeText={(d) => setCategory(d)} placeholder='Category(Mobile,book..etc)' placeholderTextColor={'black'} style={styles.input_box} />
          <TextInput value={Price} onChangeText={(d) => setPrice(d)} placeholder='Price offerred' placeholderTextColor={'black'} style={styles.input_box} />
          <TextInput value={Bname} onChangeText={(d) => setBname(d)} placeholder='Brand(If any)' placeholderTextColor={'black'} style={styles.input_box} />
          <TextInput value={Description} onChangeText={(d) => setDescription(d)} placeholder='Description' placeholderTextColor={'black'} style={styles.input_box} />
          <TextInput value={Cdetails} onChangeText={(d) => setCdetails(d)} placeholder='Contact details' placeholderTextColor={'black'} style={styles.input_box} />
          <View style={styles.upload_imageview}>
            <TouchableOpacity style={styles.upload_image_camera} onPress={() => Cameraphoto()}>
              <Text>
                Take Photo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.upload_image_gallery} onPress={() => Galleryphoto()}>
              <Text>
                Upload from Gallery
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.image_camera_view}>
            <Image source={{ uri: galleryimage }} style={styles.image_camera} />
            <Image source={{ uri: cameraimage }} style={styles.image_camera} />
          </View>
          <TouchableOpacity style={Press ? styles.btn : styles.btn1} onPress={Post} ><Text style={styles.btn_txt}>Post</Text></TouchableOpacity>
        </View>
      </ScrollView>
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
  },
  upload_imageview: {
    // backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  upload_image_camera: {
    width: w * .3,
    height: h * .05,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30
  },
  upload_image_gallery: {
    width: w * .4,
    height: h * .05,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image_camera_view: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  image_camera: {
    height: 100,
    width: 100,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 20,
    marginLeft: 20
  },
})
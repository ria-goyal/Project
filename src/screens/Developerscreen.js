// <===================================================================Import-Section-Start===================================================================================>
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Linking
} from 'react-native';
import arrow from '../images/logos/arrow.png';
const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
// <===================================================================Import-Section-End===================================================================================>


// <===================================================================Logic-Section-Start===================================================================================>

export default function Developerscreen({ navigation }) {

  function Backbutton() {
    navigation.goBack()
  }
function ViditLinkedin() {
  const ID = `https://www.linkedin.com/in/vidit-tamboli-9b7230260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`
  Linking.openURL(ID).catch((err) =>
  console.error('Error opening LinkedIn profile:', err)
);
}
function RiyaLinkedin() {
  const ID = `https://www.linkedin.com/in/riya-goyal-711994225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`
  Linking.openURL(ID).catch((err) =>
  console.error('Error opening LinkedIn profile:', err)
);
}
 // <===================================================================Logic-Section-End===================================================================================>


 // <===================================================================Frontend-Section-Start===================================================================================>
  return (
    <>
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={Backbutton}>
            <View style={styles.arrowview}>
              <Image source={arrow} style={styles.arrow} />
            </View>
          </TouchableOpacity>
          <View>
            <Text>Developed By</Text>
          </View>
        </View>
        <TouchableOpacity onPress={ViditLinkedin}>
          <View>
            <Text>VIDIT TAMBOLI</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={RiyaLinkedin}>
          <View>
            <Text>RIYA GOYAL</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3A9FF',
  },
  arrow: {
    width: w * 0.095,
    height: h * 0.05,
    marginLeft: w * .03,
    marginTop: h * .01,
    // backgroundColor:'red'
},
  logoview: {
    flex: 2,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: w * 0.4,
    height: h * 0.2,
  },
  textview: {
    flex: 3,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  textview1: {
    alignItems: 'center',
    justifyContent: 'center',
    height: h * 0.3,
  },
  text: {
    fontSize: 40,
    color: 'black',
    fontWeight: '600',
    marginTop: 20,
  },
  buttonview: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#FFC545',
    alignItems: 'center',
    justifyContent: 'center',
    height: h * 0.065,
    width: w * 0.7,
    borderRadius: 25,
    marginTop: 20,
  },
  btntext: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
  },
});

// <===================================================================Frontend-Section-End===================================================================================>

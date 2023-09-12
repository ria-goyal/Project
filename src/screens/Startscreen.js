import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import robot from '../images/logos/robot.png';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default function Startscreen({navigation}) {

  function Startapp(){
    navigation.navigate('home')
    
}
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoview}>
          <Image source={robot} style={styles.logo} />
        </View>
        <View style={styles.textview}>
          <View style={styles.textview1}>
            <Text style={styles.text}>Make each day</Text>
            <Text style={styles.text}>your</Text>
            <Text style={styles.text}>masterpiece.</Text>
          </View>
        </View>
        <View style={styles.buttonview}>
          <TouchableOpacity onPress={Startapp}>
            <View style={styles.btn}>
              <Text style={styles.btntext}>START</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3A9FF',
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

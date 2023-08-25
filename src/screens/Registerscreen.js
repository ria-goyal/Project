import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import robot from '../images/logos/robot.png';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default function Register() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoview}>
          <Image source={robot} style={styles.logo} />
        </View>
        <View style={styles.inputview}>
            <View>
                <TextInput placeholder='Enter Name' style={styles.inputtext}/>
            </View>
            <View style={styles.lineview}></View>
            <View>
                <TextInput placeholder='Enter Email Address' style={styles.inputtext}/>
            </View>
            <View style={styles.lineview}></View>
            <View>
                <TextInput placeholder='Enter Password' style={styles.inputtext}/>
            </View>
            <View style={styles.lineview}></View>
            <View>
                <TextInput placeholder='Confirm Password' style={styles.inputtext}/>
            </View>
            <View style={styles.lineview}></View>
        </View>
        <View style={styles.signupview}>
          <TouchableOpacity>
            <View style={styles.signupbtn}>
              <Text style={styles.signupbtntext}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.lineview1}></View>
        <View style={styles.loginview}>
            <View >
                <Text style={styles.logintext}>Already have an account?</Text>
            </View>
            <TouchableOpacity>
                <Text style={styles.logintext1}>Log in.</Text>
                <View style={styles.loginline}></View>
            </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE1A8',
  },
  logoview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom:20
  },
  inputview: {
    flex: 4,
  },
  inputtext:{
    fontSize:25,
    fontWeight:'500',
    marginTop:33,
    height:h*.07,
    marginHorizontal:20,
    color:'black'
  },
  lineview:{
    width:w*.9,
    height:h*.003,
    backgroundColor:'black',
    borderRadius:20,
    marginHorizontal:20,
    marginTop:5
  },
  lineview1:{
    width:w,
    height:h*.003,
    backgroundColor:'black',
    borderRadius:20,
    marginTop:5
  },
  signupview: {
    flex: 1,
    alignItems: 'center',
  },
  signupbtn: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: h * 0.065,
    width: w * 0.6,
    borderRadius: 25,
  },
  signupbtntext: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
  },
  loginview: {
    height:h*.07,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',

  },
  logintext:{
    fontSize:18
  },
  logintext1:{
    fontSize:18,
    marginLeft:5
  },
  loginline:{
    width:w*.14,
    height:h*.002,
    backgroundColor:'black',
    borderRadius:20,
    marginLeft:2
  }
});

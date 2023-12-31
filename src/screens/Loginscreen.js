// <===================================================================Import-Section-Start===================================================================================>

import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import robot from '../images/logos/robot.png';
import { ScheduledNotification, ScheduleduploadNotification, } from '../Notifications/Notifications'
const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
// <===================================================================Import-Section-End===================================================================================>


// <===================================================================Logic-Section-Start===================================================================================>
export default function Login({ navigation }) {

  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')

  async function SaveEmailPass() {
    try {
      if (email.length > 0 && pass.length > 5) {
          const user = await auth().signInWithEmailAndPassword(email, pass);
          console.log("&&&&&", user);
          if (user.user.emailVerified) {
              alert("you are verified!, welcome to ReviveX!!")
              await AsyncStorage.setItem('Email', email);
              await AsyncStorage.setItem('Pass', pass);
              ScheduledNotification();
              ScheduleduploadNotification();
              navigation.goBack();
          } else {
            alert("you don't have any account register first")
            navigation.navigate('register')
          }
      } else {
        alert('enter valid email and password of minimum 6 characters ')
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  function Registerpage() {
    alert('Register now')
    navigation.navigate('register')
  }

  async function Forgotpassword() {
    const user = auth().currentUser;
    if (user) {
      auth().sendPasswordResetEmail(user.email)
        .then(() => {
          alert("please check your inbox")
          console.log("then me ghusa he");
        })
        .catch((error) => {
          console.error('Error sending password reset email:', error);
        });
    }
  }
  // <===================================================================Logic-Section-End===================================================================================>



  // <===================================================================Frontend-Section-Start===================================================================================>
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoview}>
          <Image source={robot} style={styles.logo} />
        </View>
        <View style={styles.logintextview}>
          <View style={styles.line}></View>
          <Text style={styles.logintext}>LOG IN</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.inputview}>
          <View>
            <TextInput value={email} onChangeText={(d) => setemail(d)} placeholder="User Name" style={styles.inputtext} />
          </View>
          <View>
            <TextInput value={pass} onChangeText={(d) => setpass(d)} placeholder="Enter Password" style={styles.inputtext} />
          </View>
        </View>
        <View style={styles.loginview}>
          <TouchableOpacity onPress={SaveEmailPass}>
            <View style={styles.loginbtn}>
              <Text style={styles.loginbtntext}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.forgetview}>
          <TouchableOpacity onPress={Forgotpassword}>
            <Text style={styles.forgettext}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line1}></View>
        <View style={styles.signupview}>
          <View>
            <Text style={styles.signuptext}>Not a member?</Text>
          </View>
          <TouchableOpacity onPress={Registerpage}>
            <Text style={styles.signuptext1}>Create Acoount</Text>
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
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 70,
  },
  line: {
    width: w * 0.3,
    height: h * 0.003,
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 2,
  },
  logintextview: {
    // flex:1,
    height: h * 0.05,
    // backgroundColor:'grey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 45,
    marginTop: 5,
  },
  logintext: {
    fontSize: 27,
    marginHorizontal: 10,
    color: 'white',
  },
  inputview: {
    // flex:3,
    // backgroundColor:'yellow'
  },
  inputtext: {
    fontSize: 20,
    height: h * 0.07,
    marginHorizontal: 25,
    color: 'black',
    backgroundColor: '#C1C5FF',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 25,
  },
  loginview: {
    // flex: 1,
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  loginbtn: {
    backgroundColor: '#FFC545',
    alignItems: 'center',
    justifyContent: 'center',
    height: h * 0.065,
    width: w * 0.85,
    borderRadius: 10,
  },
  loginbtntext: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
  forgetview: {
    // flex: 1,
    // backgroundColor: 'orange',
    alignItems: 'center',
    height: h * 0.19,
  },
  forgettext: {
    fontSize: 17,
    marginTop: 15,
    color: 'white',
  },
  line1: {
    width: w * 0.87,
    height: h * 0.003,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 20,
  },
  signupview: {
    flex: 1,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signuptext: {
    fontSize: 18,
    color: 'white',
    // marginLeft:5
  },
  signuptext1: {
    fontSize: 18,
    marginLeft: 9,
    color: '#FFC545',
  },
});
// <===================================================================Frontend-Section-End===================================================================================>


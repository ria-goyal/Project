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
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import robot from '../images/logos/robot.png';
const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
// <===================================================================Import-Section-End===================================================================================>



// <===================================================================Logic-Section-Start===================================================================================>
export default function Signup({ navigation }) {

  const [msg, setmsg] = useState('')
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')
  const [cpass, setcpass] = useState('')

  async function Signuppage() {
    try {
      await AsyncStorage.setItem('Username', username);
      if (email.length > 0 && pass.length > 5) {
        if (pass == cpass) {
          const isUserCreated = await auth().createUserWithEmailAndPassword(email, pass);
          await auth().currentUser.sendEmailVerification();
          await auth().signOut();
          alert("please verify your email click on the link in your inbox");
          navigation.navigate('login');
          console.log(isUserCreated);
        } else {
          alert("password and confirm password should be same")
        }
      } else {
        alert("enter valid email id and password should be atleast of 6 characters")
      }
    }
    catch (e) {
      console.log(e.message);
      const errormsg = e.message.replace(/\[.*?\]/, '');
      setmsg(errormsg)
    }
  }

  function Loginpage() {
    navigation.navigate('login')
  }
  // <===================================================================Logic-Section-End===================================================================================>



  // <===================================================================Frontend-Section-Start===================================================================================>
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoview}>
          <Image source={robot} style={styles.logo} />
        </View>
        <View style={styles.signuptextview}>
          <View style={styles.line}></View>
          <Text style={styles.signuptext}>SIGN UP</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.inputview}>
          <View>
            <TextInput value={username} onChangeText={(d) => setusername(d)} placeholder='Enter Name' style={styles.inputtext} />
          </View>
          <View>
            <TextInput value={email} onChangeText={(d) => setemail(d)} placeholder='Enter Email Address' style={styles.inputtext} />
          </View>
          <View>
            <TextInput value={pass} onChangeText={(d) => setpass(d)} placeholder='Enter Password' style={styles.inputtext} />
          </View>
          <View>
            <TextInput value={cpass} onChangeText={(d) => setcpass(d)} placeholder='Confirm Password' style={styles.inputtext} />
          </View>
        </View>
        <Text>{msg}</Text>
        <View style={styles.signupview}>
          <TouchableOpacity onPress={Signuppage}>
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
          <TouchableOpacity onPress={Loginpage}>
            <Text style={styles.logintext1}>Log In.</Text>
            {/* <View style={styles.loginline}></View> */}
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
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginBottom:10
  },
  line: {
    width: w * 0.3,
    height: h * 0.003,
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 2,
  },
  signuptextview: {
    // flex:1,
    height: h * 0.05,
    // backgroundColor:'grey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 5,
  },
  signuptext: {
    fontSize: 27,
    marginHorizontal: 10,
    color: 'white',
  },
  inputview: {
    // flex: 4,
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
    marginBottom: 24,
  },
  // lineview:{
  //   width:w*.9,
  //   height:h*.003,
  //   backgroundColor:'black',
  //   borderRadius:20,
  //   marginHorizontal:20,
  //   marginTop:5
  // },
  lineview1: {
    width: w * .87,
    height: h * .003,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 20
  },
  signupview: {
    flex: 1,
    alignItems: 'center',
  },
  signupbtn: {
    backgroundColor: '#FFC545',
    alignItems: 'center',
    justifyContent: 'center',
    height: h * 0.065,
    width: w * 0.85,
    borderRadius: 25,
  },
  signupbtntext: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
  },
  loginview: {
    height: h * .07,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35

  },
  logintext: {
    fontSize: 18,
    color: 'white'
  },
  logintext1: {
    fontSize: 18,
    marginLeft: 9,
    color: '#FFC545'
  },
  // loginline:{
  //   width:w*.14,
  //   height:h*.002,
  //   backgroundColor:'black',
  //   borderRadius:20,
  //   marginLeft:2
  // }
});
// <===================================================================Frontend-Section-End===================================================================================>


import React,{useState} from 'react';
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
import arrow from '../images/logos/arrow.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default function Newpassword({navigation}) {

    const [pass,setpass] = useState('')
    const [cpass,setcpass] = useState('')

    async function Resetpassword(){
        try {
            await AsyncStorage.setItem('Newpass', pass);
            if (pass !== null && pass !== undefined && pass !== '' && cpass !== null && cpass !== undefined && cpass !== '') {
                if (pass === cpass) {
                    navigation.navigate('login')
                    alert("password changed successfully" )
                }
                else {
                    alert("New password and Confirm password should be same" )
                }
            } 
            else{
                alert("Enter Password correctlly" )
            }
           
          }
          catch (e) {
            console.log(e);
          }
      }
      function Backbutton(){
        navigation.goBack()
    }
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={Backbutton}>
                    <View  style={styles.arrowview}>
                        <Image source={arrow} style={styles.arrow} />
                    </View>
                </TouchableOpacity>
                <View style={styles.passwordview}>
                    <Text style={styles.passwordtext}>Create New Password</Text>
                </View>
                <View style={styles.logoview}>
                    <Image source={robot} style={styles.logo} />
                </View>
                <View style={styles.passwordview1}>
                    <Text style={styles.passwordtext1}>New password must be different from </Text>
                    <Text style={styles.passwordtext1}>previously used password</Text>
                </View>
                <View>
                    <TextInput value={pass} onChangeText={(d)=>setpass(d)} placeholder='New Password' style={styles.inputtext} />
                </View>
                <View>
                    <TextInput value={cpass} onChangeText={(d)=>setcpass(d)} placeholder='Confirm Password' style={styles.inputtext} />
                </View>
                <View style={styles.sendview}>
                    <TouchableOpacity onPress={Resetpassword}>
                        <View style={styles.sendbtn}>
                            <Text style={styles.sendbtntext}>Reset Password</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#A3A9FF',
    },
    arrow: {
        width: w * 0.095,
        height: h * 0.05,
        marginLeft: 15,
        marginTop: 10
    },
    passwordview: {
        alignItems: 'center',
        justifyContent: 'center',
        height: h * .1,
    },
    passwordtext: {
        fontSize: 22,
        color: 'black',
    },
    logoview: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 40,
    },
    passwordview1: {
        alignItems: 'center',
        justifyContent: 'center',
        height: h * .1,
        marginTop: 30
    },
    passwordtext1: {
        fontSize: 19,
        color: 'black',
        marginHorizontal: 10
    },
    inputtext: {
        fontSize: 20,
        height: h * 0.07,
        marginHorizontal: 25,
        color: 'black',
        backgroundColor: '#C1C5FF',
        // borderColor: 'white',
        // borderWidth: 2,
        borderRadius: 10,
        marginVertical: 20,
        textAlign: 'center'
    },
    sendview: {
        alignItems: 'center',
        marginTop: 30
    },
    sendbtn: {
        backgroundColor: '#FFC545',
        alignItems: 'center',
        justifyContent: 'center',
        height: h * 0.065,
        width: w * 0.85,
        borderRadius: 10,
    },
    sendbtntext: {
        fontSize: 25,
        fontWeight: '500',
        color: 'black',
    },
})
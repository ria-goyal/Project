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
import arrow from '../images/logos/arrow.png';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default function Forgotpassword() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.passwordview}>
                    <Text style={styles.passwordtext}>OTP Verification</Text>
                </View>
                <View style={styles.logoview}>
                    <Image source={robot} style={styles.logo} />
                </View>
                <View style={styles.passwordview1}>
                    <Text style={styles.passwordtext1}>Please enter OTP code recieved</Text>
                    <Text style={styles.passwordtext1}>to your number</Text>
                </View>
                <View style={styles.inputtextview}>
                    <TextInput style={styles.inputtext} />
                    <TextInput style={styles.inputtext} />
                    <TextInput style={styles.inputtext} />
                    <TextInput style={styles.inputtext} />
                </View>
                <View style={styles.resendview}>
                    <View>
                        <Text style={styles.resendtext}>If you don't receive the code?</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.resendtext1}>Resend</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.submitview}>
                    <TouchableOpacity>
                        <View style={styles.submitbtn}>
                            <Text style={styles.submitbtntext}>SUBMIT</Text>
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
    inputtextview: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 45
    },
    inputtext: {
        fontSize: 25,
        height: h * 0.07,
        marginHorizontal: 10,
        color: 'black',
        backgroundColor: '#C1C5FF',
        // borderColor: 'white',
        // borderWidth: 2,
        borderRadius: 10,
        width: w * .14,
        textAlign:'center'
    },
    resendview: {
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
      },
      resendtext: {
        fontSize: 18,
        color: 'black',
      },
      resendtext1: {
        fontSize: 18,
        marginLeft: 9,
        color: '#FFC545',
      },
    submitview: {
        alignItems: 'center',
        marginTop: 30
    },
    submitbtn: {
        backgroundColor: '#FFC545',
        alignItems: 'center',
        justifyContent: 'center',
        height: h * 0.065,
        width: w * 0.85,
        borderRadius: 10,
    },
    submitbtntext: {
        fontSize: 25,
        fontWeight: '500',
        color: 'black',
    },
})
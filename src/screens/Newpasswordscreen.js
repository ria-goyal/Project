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
                <TouchableOpacity>
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
                    <TextInput placeholder='New Password' style={styles.inputtext} />
                </View>
                <View>
                    <TextInput placeholder='Confirm Password' style={styles.inputtext} />
                </View>
                <View style={styles.sendview}>
                    <TouchableOpacity>
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
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
import arrow from '../images/logos/arrow.png';
import share from '../images/logos/share.png';
import heart from '../images/logos/heart.png';
import email from '../images/logos/email.png';
import phone from '../images/logos/phone.png';
import robot from '../images/logos/robot.png'

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default function Workinfocard() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.topview}>
                    <View style={styles.iconsview}>
                        <TouchableOpacity>
                            <View style={styles.arrowview}>
                                <Image source={arrow} style={styles.arrowimage} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.shareview}>
                                <Image source={share} style={styles.shareimage} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.logoview}>
                    <Image source={robot} style={styles.logo} />
                </View>
                <View style={styles.worktextview}>
                    <View style={styles.line}></View>
                    <Text style={styles.worktext}>WORk</Text>
                    <View style={styles.line}></View>
                </View>
                <View>
                    
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A3A9FF',
    },
    topview: {
        // flex: 1,
        // backgroundColor: 'skyblue',
    },
    iconsview: {
        flexDirection: 'row',
        backgroundColor: 'green',
        alignItems: 'center',
        height: h * 0.065,
    },
    arrowimage: {
        width: w * 0.095,
        height: h * 0.05,
        marginLeft: 15,
    },
    shareimage: {
        width: w * 0.08,
        height: h * 0.046,
        marginLeft: 290,
    },
    logoview: {
        // flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // marginTop: 70,
      },
    line: {
        width: w * 0.3,
        height: h * 0.003,
        backgroundColor: 'white',
        borderRadius: 20,
        marginLeft: 2,
    },
    worktextview: {
        // flex:1,
        height: h * 0.05,
        backgroundColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 45,
        marginTop: 5,
    },
    worktext: {
        fontSize: 27,
        marginHorizontal: 10,
        color: 'white',
    },
});
// <===================================================================Import-Section-Start===================================================================================>
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
const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
// <===================================================================Import-Section-End===================================================================================>


// <===================================================================Frontend-Section-Start===================================================================================>

export default function Forgotpassword({ navigation }) {

    function Backbutton() {
        navigation.goBack()
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.passwordview}>
                    <Text style={styles.passwordtext}>Privacy Policy</Text>
                </View>
                <TouchableOpacity onPress={Backbutton}>
                    <View style={styles.logoview}>
                        <Image source={arrow} style={styles.logo} />
                    </View>
                </TouchableOpacity>
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
    logoview: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 40,
    },
})
// <===================================================================Frontend-Section-End===================================================================================>

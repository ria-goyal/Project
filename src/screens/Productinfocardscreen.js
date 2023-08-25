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

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default function Productioninfocard() {
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
                <View style={styles.productview}>
                    <View style={styles.detailsview}>
                        <View style={styles.detailstopview}>
                            <View>
                                <Text style={styles.detailstext}>Product Name:</Text>
                            </View>
                            <TouchableOpacity>
                                <View>
                                    <Image source={heart} style={styles.heartimage} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.detailsbottomview}>
                            <Text style={styles.detailstext}>Rate:</Text>
                        </View>
                    </View>
                    <View style={styles.line1}></View>
                    <View style={styles.descriptionview}>
                        <View style={styles.descriptiontext}>
                            <Text style={styles.descriptiontext1}>Description:</Text>
                        </View>
                    </View>
                    <View style={styles.line1}></View>
                    <View style={styles.contactview}>
                        <View style={styles.contacttext}>
                            <Text style={styles.contacttext1}>Contact Details:</Text>
                        </View>
                        <View>
                            <Text style={styles.contacttext2}>Owner Name:</Text>
                        </View>
                        <View style={styles.contactdetail}>
                            <View style={styles.phonedetail}>
                                <Image source={phone} style={styles.phoneimage} />
                                <Text style={styles.phonetext}>0123456789</Text>
                            </View>
                            <View style={styles.emaildetail}>
                                <Image source={email} style={styles.emailimage} />
                                <Text style={styles.emailtext}>training@gmail.com</Text>
                            </View>
                        </View>
                    </View>
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
    topview: {
        flex: 1,
        backgroundColor: 'skyblue',
    },
    iconsview: {
        flexDirection: 'row',
        // backgroundColor:'green',
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
    productview: {
        flex: 1,
        // backgroundColor: 'yellow',
    },
    detailsview: {
        marginTop: 10
    },
    detailstopview: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 10
    },
    detailstext: {
        fontSize: 19,
        color: 'black'
    },
    heartimage: {
        marginLeft: 200,
        width: w * .078
    },
    detailsbottomview: {
        marginVertical: 20,
        marginHorizontal: 10
    },
    line1: {
        width: w * 0.87,
        height: h * 0.003,
        backgroundColor: 'black',
        borderRadius: 20,
        marginHorizontal: 20,
    },
    descriptionview: {
        height: h * .18
    },
    descriptiontext1: {
        fontSize: 18,
        marginTop: 5,
        marginLeft: 10,
        color: 'black'
    },
    contactview: {
    },
    contacttext1: {
        fontSize: 18,
        marginTop: 5,
        marginLeft: 10,
        color: 'black'
    },
    contacttext2: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 35,
        color: 'black'
    },
    contactdetail: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 15
    },
    phonedetail: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20
    },
    phonetext: {
        fontSize: 18,
        color: 'black'
    },
    emailimage: {
        height: h * .035,
        width: w * .08
    },
    emailtext: {
        fontSize: 18,
        color: 'black'
    },
    emaildetail: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});

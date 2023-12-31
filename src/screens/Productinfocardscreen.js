// <===================================================================Import-Section-Start===================================================================================>

import React, { useContext, useEffect, useState, } from 'react';
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
import { hr_bar_b } from '../global/style';
import { SliderBox } from "react-native-image-slider-box";
import Share from 'react-native-share';
const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
// <===================================================================Import-Section-End===================================================================================>



// <===================================================================Logic-Section-Start===================================================================================>
export default function Productinfocard({ navigation, route }) {

    const [product, setproduct] = useState(route.params)
    function Backbutton() {
        navigation.goBack()
    }

    async function Shareproduct(product) {

        const img1 = product?.G_img[0] || null;
        const img2 = product?.C_img[0] || null;

        const isValidImage1 = typeof img1 === 'string' && img1.trim() !== '';
        const isValidImage2 = typeof img2 === 'string' && img2.trim() !== '';

        const images = [];
        if (isValidImage1) images.push(img1);
        if (isValidImage2) images.push(img2);

        const name = [
            "PRODUCT NAME:- " + product.p_name,
            "PRODUCT RATE:- " + product.p_rate,
            "PRODUCT DESCRIPTION:- " + product.p_des,
            "OWNER NAME:- " + product.c_name + '\n',
            'To buy this amazing product visit us on ReviveX!'
        ].join('\n\n');

        try {
            const shareoption = {
                message: name,
                urls: images,
            }

            const Shareresponse = await Share.open(shareoption);
        } catch (error) {
            console.log("error in share", error);
        }
    }


    function ImageSlider() {
        const img1 = product?.G_img[0] || null;
        const img2 = product?.C_img[0] || null;

        const isValidImage1 = typeof img1 === 'string' && img1.trim() !== '';
        const isValidImage2 = typeof img2 === 'string' && img2.trim() !== '';

        const images = [];
        if (isValidImage1) images.push(img1);
        if (isValidImage2) images.push(img2);

        console.log("Product Data:", product);
        console.log("Image URLs:", images);

        const imagesWithUri = images.map(img => ({ uri: img }));

        return (
            <View style={styles.container}>
                {images.length > 0 ? (
                    <SliderBox
                        images={imagesWithUri}
                        style={styles.banner}
                    />
                ) : (
                    <Text>No images available</Text>
                )}
            </View>
        );
    }
    // <===================================================================Logic-Section-End===================================================================================>



    // <===================================================================Frontend-Section-Start===================================================================================>
    return (
        <>
            <View style={styles.container}>
                <View style={styles.topview}>
                    <View style={styles.iconsview}>
                        <TouchableOpacity onPress={Backbutton}>
                            <View style={styles.arrowview}>
                                <Image source={arrow} style={styles.arrowimage} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Shareproduct(product)}>
                            <View style={styles.shareview}>
                                <Image source={share} style={styles.shareimage} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text> {ImageSlider()}</Text>
                </View>
                <View style={styles.productview}>
                    <View style={styles.detailsview}>
                        <View style={styles.detailstopview}>
                            <View>
                                <Text style={styles.detailstext}>Product Name:{product.p_name}</Text>
                            </View>
                            <TouchableOpacity>
                                <View>
                                    <Image source={heart} style={styles.heartimage} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* <View style={styles.detailsbottomview}>
                            <Text style={styles.detailstext}>Category:</Text>
                        </View> */}
                        <View style={styles.detailsbottomview}>
                            <Text style={styles.detailstext}>Rate:{product.p_rate}</Text>
                        </View>
                        {/* <View style={styles.detailsbottomview}>
                            <Text style={styles.detailstext}>Brand:</Text>
                        </View> */}
                    </View>
                    <View style={hr_bar_b}></View>
                    <View style={styles.descriptionview}>
                        <View style={styles.descriptiontext}>
                            <Text style={styles.descriptiontext1}>Description:{product.p_des}</Text>
                        </View>
                    </View>
                    <View style={hr_bar_b}></View>
                    <View style={styles.contactview}>
                        <View style={styles.contacttext}>
                            <Text style={styles.contacttext1}>Contact Details:</Text>
                        </View>
                        <View>
                            <Text style={styles.contacttext2}>Owner Name:{product.c_name}</Text>
                        </View>
                        <View style={styles.contactdetail}>
                            <View style={styles.phonedetail}>
                                <Image source={phone} style={styles.phoneimage} />
                                <Text style={styles.phonetext}>{product.c_number}</Text>
                            </View>
                            <View style={styles.emaildetail}>
                                <Image source={email} style={styles.emailimage} />
                                <Text style={styles.emailtext}>{product.e_mail}</Text>
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
        // flex: 1,
        backgroundColor: 'skyblue',
    },
    iconsview: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        height: h * 0.06,
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
    banner: {
        width: w,
        height: h * .4,
        // position: 'relative',
    },
    productview: {
        // flex: 1,
        // backgroundColor: 'yellow',
    },
    detailsview: {
        marginTop: h * .01
    },
    detailstopview: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 15,
        paddingHorizontal: w * .02,
        marginHorizontal: w * .02
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
        marginTop: h * .005,
        paddingHorizontal: w * .02,
        marginHorizontal: h * .01
    },
    // line1: {
    //     width: w * 0.87,
    //     height: h * 0.003,
    //     backgroundColor: 'black',
    //     borderRadius: 20,
    //     marginHorizontal: 20,
    // },
    descriptionview: {
        height: h * .2,
        // backgroundColor:'white',
        marginLeft: 10,
    },
    descriptiontext1: {
        fontSize: 18,
        // marginTop: 15,
        paddingHorizontal: w * .02,
        color: 'black',

    },
    contactview: {
        marginLeft: 15,
    },
    contacttext1: {
        fontSize: 18,
        marginTop: 15,

        color: 'black'
    },
    contacttext2: {
        fontSize: 18,
        marginTop: 15,
        color: 'black'
    },
    contactdetail: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
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
// <===================================================================Frontend-Section-End===================================================================================>

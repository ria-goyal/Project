import React,  { useContext, useEffect, useState, } from 'react';
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
import { ContextAuth } from '../Context/Context';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default function Workinfocard({navigation,route}) {

    const data = useContext(ContextAuth)
    const [work,setwork]=useState(route.params)
    const [contact,setcontact]=useState('')
    
    console.log("contact*****************",contact);
    console.log("route*****************",route);
    useEffect(()=>{
        const {contactdetails} = data
        setcontact(contactdetails)
        setwork(route.params)
      },[])

    function Backbutton(){
        navigation.goBack()
    }
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
                <View style={styles.detailsview}>
                    <View style={styles.detailstopview}>
                        <View>
                            <Text style={styles.detailstopleft}>Name:{work.work_name}</Text>
                        </View>
                        <View >
                            <Text style={styles.detailstopright}>Paid Work:{work.offer_rate}</Text>
                        </View>
                    </View>
                    <View style={styles.detailsbottomview}>
                        <Text style={styles.detailsbottomtext}>Requirements:{work.requirement}</Text>
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
                            <Text style={styles.phonetext}>{contact.p_number}</Text>
                        </View>
                        <View style={styles.emaildetail}>
                            <Image source={email} style={styles.emailimage} />
                            <Text style={styles.emailtext}>training@gmail.com</Text>
                        </View>
                    </View>
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
        // backgroundColor: 'green',
        alignItems: 'center',
        height: h * 0.08,
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 10
    },
    line: {
        width: w * 0.33,
        height: h * 0.003,
        backgroundColor: 'black',
        borderRadius: 20,

    },
    worktextview: {
        // flex:1,
        height: h * 0.05,
        // backgroundColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 5,
    },
    worktext: {
        fontSize: 27,
        marginHorizontal: 10,
        color: 'black',
    },
    detailsview: {
        // backgroundColor:'white',
        height: h * .2,
        marginLeft: 10
    },
    detailstopview: {
        flexDirection: 'row',

    },
    detailstopright: {
        fontSize: 18,
        marginLeft: 180,
        color: 'black'
    },
    detailstopleft: {
        fontSize: 18,
        color: 'black',

    },
    detailsbottomtext: {
        color: 'black',
        fontSize: 18,
        marginTop: 40
    },
    line1: {
        width: w * 0.87,
        height: h * 0.003,
        backgroundColor: 'black',
        borderRadius: 20,
        marginHorizontal: 20,
    },
    descriptionview: {
        height: h * .22
    },
    descriptiontext1: {
        fontSize: 18,
        marginTop: 20,
        marginLeft: 10,
        color: 'black'
    },
    contactview: {
        // backgroundColor:'white',
        marginTop: 25,
        marginLeft: 10
    },
    contacttext1: {
        fontSize: 18,
        // marginTop: 15,
        // marginLeft: 10,
        color: 'black'
    },
    contacttext2: {
        fontSize: 18,
        marginTop: 25,
        // marginLeft: 25,
        color: 'black'
    },
    contactdetail: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        // marginLeft: 15
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
// <===================================================================Import-Section-Start===================================================================================>
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Image, Linking } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import arrow from '../images/logos/arrow.png';
import { heading, colors } from '../global/style'
import { CancelAllNotifications } from '../Notifications/Notifications'
const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
// <===================================================================Import-Section-End===================================================================================>



// <===================================================================Logic-Section-Start===================================================================================>
export default function Review({ navigation,route }) {

    const { Refresh} = route.params;
    const [name, setname] = useState('')
    useEffect(() => {
        user();
        Refresh();
    }, [])

    // <==================Navigation-Section-Start======================>
    function Backbutton() {
        navigation.goBack()
    }
    function Developerpage() {
        navigation.navigate('developer')
    }
    function Privacypolicypage() {
        navigation.navigate('privacypolicy')
    }
    function Termsconditionpage() {
        navigation.navigate('terms&conditions')
    }
    // <==================Navigation-Section-End======================>


    // <==================Other-Section-Start======================>
    async function user() {
        try {
            const name = await AsyncStorage.getItem('Username');
            setname(name);
        }
        catch (e) {
            console.log(e);
        }
    }

    async function Updateusername() {
        try {
            await AsyncStorage.setItem('Username', name);
            Backbutton();
        }
        catch (e) {
            console.log(e);
        }
    }

    function ContactUs() {
        const emailSubject = 'Contact-Us';
        const emailBody = '';
        const emailAddress = 'revivex.23@gmail.com';

        const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

        Linking.openURL(mailtoLink).catch(err => console.error('Error opening email', err));
    }

    function SuggestionorBug() {
        const emailSubject = 'Suggestionstion or Spotted a Bug';
        const emailBody = '';
        const emailAddress = 'revivex.23@gmail.com';

        const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

        Linking.openURL(mailtoLink).catch(err => console.error('Error opening email', err));
    }

    async function Logout() {
        try {
            await AsyncStorage.setItem('Email', '');
            await AsyncStorage.setItem('Pass', '');
            alert('Logout successfully')
            Refresh();
            navigation.goBack()
            CancelAllNotifications();
        }
        catch (e) {
            console.log(e);
        }
    }
    // <==================Other-Section-End======================>

    // <===================================================================Logic-Section-End===================================================================================>



    // <===================================================================Frontend-Section-Start===================================================================================>
    return (
        <>
            <View>
                <TouchableOpacity onPress={Backbutton}>
                    <View style={styles.arrowview}>
                        <Image source={arrow} style={styles.arrow} />
                    </View>
                </TouchableOpacity>
                <Text>Setting Page</Text>
            </View>
            <View>
                <View>
                    <Text>User name</Text>
                    <TextInput value={name} onChangeText={(d) => setname(d)} placeholder='Your Name' placeholderTextColor={'black'} />
                    <TouchableOpacity onPress={Updateusername}>
                        <View>
                            <Text>SAVE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={ContactUs}>
                    <View>
                        <Text>Contact Us</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Privacypolicypage}>
                    <View>
                        <Text>Privacy Policy</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Termsconditionpage}>
                    <View>
                        <Text>Terms&Conditions</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={SuggestionorBug}>
                    <View>
                        <Text>Suggestions or Spotted a Bug</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Developerpage}>
                    <View>
                        <Text>Developed By</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.logoutview}>
                    <TouchableOpacity style={styles.logoutbtn} onPress={Logout}>
                        <Text>LOG OUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#A3A9FF',
    },
    arrow: {
        width: w * 0.095,
        height: h * 0.05,
        marginLeft: w * .03,
        marginTop: h * .01,
        // backgroundColor:'red'
    },
    edittextview: {
        alignItems: 'center',
        marginBottom: h * .005,
        // marginVertical: h * .02
    },
    edittext: {
        fontSize: w * .07,
        fontWeight: '600',
        color: 'black'
    },
    input_box: {
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: w * .06,
        marginVertical: h * .02,
        borderRadius: w * .02,
        paddingHorizontal: w * .03,
        // paddingVertical:h*.012,
        color: 'black',
        backgroundColor: colors.back,
        elevation: 6
    },
    form: {
        marginTop: h * .025,

    },
    inputview: {
        marginVertical: h * .005,
        marginHorizontal: w * .05,
    },
    text: {
        fontSize: 18,
        marginBottom: h * .007
    },
    inputtext: {
        fontSize: 20,
        height: h * 0.07,
        color: 'black',
        backgroundColor: '#C1C5FF',
        borderRadius: w * .05,
        marginBottom: h * .035,
    },
    btnview: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: h * .015
    },
    savebtn: {
        backgroundColor: '#FFC545',
        alignItems: 'center',
        justifyContent: 'center',
        height: h * 0.065,
        width: w * 0.45,
        borderRadius: w * .08,
        marginHorizontal: w * .02
    },
    savebtntext: {
        fontSize: 25,
        fontWeight: '600',
        color: 'black',
    },
    resetbtn: {
        backgroundColor: '#FFC545',
        alignItems: 'center',
        justifyContent: 'center',
        height: h * 0.065,
        width: w * 0.43,
        borderRadius: w * .08,
        marginHorizontal: w * .02
    },
    resetbtntext: {
        fontSize: 25,
        fontWeight: '600',
        color: 'black',
    },
    logoutview: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
    },
    logoutbtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: 'red',
        width: 80
    },
})
// <===================================================================Frontend-Section-End===================================================================================>

// <===================================================================Import-Section-Start===================================================================================>
import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput, ScrollView
} from 'react-native';
import { heading, colors } from '../global/style'
import { WorkPatchrequest } from '../Data/WorkAPI'
import arrow from '../images/logos/arrow.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
// <===================================================================Import-Section-End===================================================================================>



// <===================================================================Logic-Section-Start===================================================================================>
export default function Productedit({ navigation, route }) {

    const [work, setwork] = useState(route.params)
    const [wname, setname] = useState('')
    const [Requirements, setRequirements] = useState('')
    const [Price, setPrice] = useState(0)
    const [Description, setDescription] = useState('')
    const [email, setemail] = useState('')
    const [Cnumber, setCnumber] = useState(0)
    const [Cname, setCname] = useState('')

    useEffect(() => {
        console.log("work ka data update se pehele", work);
        setname(work.w_name)
        setRequirements(work.w_req)
        setPrice(String(work.w_rate))
        setDescription(work.w_des)
        setCname(work.c_name)
        setCnumber(String(work.c_number))
        setemail(work.e_mail)
    }, [])

    function Backbutton() {
        navigation.goBack()
    }

    async function Updatework() {

        const Email = await AsyncStorage.getItem('Email');
        if (Email == email) {
            const params = {
                "w_name": wname,
                "w_req": Requirements,
                "w_rate": Price,
                "w_des": Description,
                "c_name": Cname,
                "c_number": Cnumber,
                "e_mail": email
            }

            const id = work._id
            await WorkPatchrequest(params, id).then(res => {
                console.log(res.data);
                console.log("work ka data he update ke bad", params);
            })
                .catch(error => {
                    console.log(error);
                })

            setname('')
            setRequirements('')
            setPrice('')
            setDescription('')
            setemail('')
            setCname('')
            setCnumber('')
            navigation.goBack();
        } else {
            alert('entered email should be same as login email')
        }
    }

    function Reset() {
        setname('')
        setRequirements('')
        setPrice('')
        setDescription('')
        setemail('')
        setCname('')
        setCnumber('')
    }
    // <===================================================================Logic-Section-End===================================================================================>



    // <===================================================================Frontend-Section-Start===================================================================================>
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={Backbutton}>
                    <View style={styles.arrowview}>
                        <Image source={arrow} style={styles.arrow} />
                    </View>
                </TouchableOpacity>
                <View style={styles.edittextview}>
                    <Text style={styles.edittext}>Edit Work Details</Text>
                </View>
                <ScrollView>
                    <View style={styles.form}>
                        <TextInput value={wname} onChangeText={(d) => setname(d)} placeholder='Your Name' placeholderTextColor={'black'} style={styles.input_box} />
                        <TextInput value={Requirements} onChangeText={(d) => setRequirements(d)} placeholder='Requirements' placeholderTextColor={'black'} style={styles.input_box} />
                        <TextInput value={Price.toString()} onChangeText={(d) => setPrice(d)} placeholder='Price offerred' placeholderTextColor={'black'} style={styles.input_box} />
                        <TextInput value={Description} onChangeText={(d) => setDescription(d)} placeholder='Description (About the work)' placeholderTextColor={'black'} style={styles.input_box} />
                        <TextInput value={Cname} onChangeText={(d) => setCname(d)} placeholder='name' placeholderTextColor={'black'} style={styles.input_box} />
                        <TextInput value={Cnumber.toString()} onChangeText={(d) => setCnumber(d)} placeholder='number' placeholderTextColor={'black'} style={styles.input_box} />
                        <TextInput value={email} onChangeText={(d) => setemail(d)} placeholder='email' placeholderTextColor={'black'} style={styles.input_box} />
                    </View>
                </ScrollView>
                <View style={styles.btnview}>
                    <View style={styles.saveview}>
                        <TouchableOpacity onPress={Updatework}>
                            <View style={styles.savebtn}>
                                <Text style={styles.savebtntext}>SAVE</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.resetview}>
                        <TouchableOpacity onPress={Reset}>
                            <View style={styles.resetbtn}>
                                <Text style={styles.resetbtntext}>RESET</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
})
// <===================================================================Frontend-Section-End===================================================================================>

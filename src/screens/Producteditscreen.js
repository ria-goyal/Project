// <===================================================================Import-Section-Start===================================================================================>

import React, { useState, useEffect } from 'react';
import { heading, colors } from '../global/style'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,
    ScrollView
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ProductPatchrequest } from '../Data/ProductAPI'
import arrow from '../images/logos/arrow.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
// <===================================================================Import-Section-End===================================================================================>


// <===================================================================Logic-Section-Start===================================================================================>
export default function Productedit({ navigation, route }) {

    const [pro, setpro] = useState(route.params)
    const [Pname, setPname] = useState('')
    const [Category, setCategory] = useState('')
    const [Price, setPrice] = useState('')
    const [Bname, setBname] = useState('')
    const [Description, setDescription] = useState('')
    const [email, setemail] = useState('')
    const [Cnumber, setCnumber] = useState('')
    const [Cname, setCname] = useState('')
    const [gimage, setgalleryimage] = useState(null)
    const [cimage, setcameraimage] = useState(null)

    function Backbutton() {
        navigation.goBack()
    }

    useEffect(() => {
        console.log("pro ka data update se pehele", pro)
        setPname(pro.p_name)
        setPrice(String(pro.p_rate))
        setBname(pro.p_brand)
        setDescription(pro.p_des)
        setemail(pro.e_mail)
        setCname(pro.c_name)
        setCnumber(String(pro.c_number))
        setgalleryimage(String(pro.G_img))
        setcameraimage(String(pro.C_img))
    }, [])

    const Galleryphoto = () => {
        let options = {
            storageOptions: {
                path: 'image',
            },
        };

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('user cancelled');
            }
            else {
                setgalleryimage(response.assets[0].uri)
            }
        });
    };
    const Cameraphoto = () => {
        let options = {
            storageOptions: {
                path: 'image',
            },
        };

        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('user cancelled');
            }
            else {
                setcameraimage(response.assets[0].uri)
            }
        });
    };

    async function Updateproduct() {

        const Email = await AsyncStorage.getItem('Email');
        if (Email == email) {
            const params = {
                "p_name": Pname,
                "p_rate": Price,
                "p_brand": Bname,
                "p_des": Description,
                "c_name": Cname,
                "c_number": Cnumber,
                "e_mail": email,
                "G_img": gimage,
                "C_img": cimage
            }

            const id = pro._id
            await ProductPatchrequest(params, id).then(res => {
                console.log(res.data);
                console.log("product ka data he", params);
            })
                .catch(error => {
                    console.log(error);
                })

            setPname('')
            setCategory('')
            setPrice('')
            setBname('')
            setDescription('')
            setemail('')
            setCname('')
            setCnumber('')
            setgalleryimage(null)
            setcameraimage(null)
            navigation.goBack();
        } else {
            alert('entered email should be same as login email')
        }
    }

    function Reset() {
        setPname('')
        setCategory('')
        setPrice('')
        setBname('')
        setDescription('')
        setemail('')
        setCname('')
        setCnumber('')
        setgalleryimage(null)
        setcameraimage(null)
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
                    <Text style={styles.edittext}>Edit Product Details</Text>
                </View>
                <ScrollView>
                    <View style={styles.form}>
                        <TextInput value={Pname} onChangeText={(d) => setPname(d)} placeholder='Product Title/Name' placeholderTextColor={'black'} style={styles.input_box} />
                        <TextInput value={Category} onChangeText={(d) => setCategory(d)} placeholder='Category(Mobile,book..etc)' placeholderTextColor={'black'} style={styles.input_box} />
                        <TextInput value={Price} onChangeText={(d) => setPrice(d)} placeholder='Price offerred' placeholderTextColor={'black'} style={styles.input_box} />
                        <TextInput value={Bname} onChangeText={(d) => setBname(d)} placeholder='Brand(If any)' placeholderTextColor={'black'} style={styles.input_box} />
                        <TextInput value={Description} onChangeText={(d) => setDescription(d)} placeholder='Description' placeholderTextColor={'black'} style={styles.input_box} />
                        <TextInput value={Cname} onChangeText={(d) => setCname(d)} placeholder='name' placeholderTextColor={'black'} style={styles.input_box} />
                        <TextInput value={Cnumber} onChangeText={(d) => setCnumber(d)} placeholder='number' placeholderTextColor={'black'} style={styles.input_box} />
                        <TextInput value={email} onChangeText={(d) => setemail(d)} placeholder='email' placeholderTextColor={'black'} style={styles.input_box} />
                        <View style={styles.upload_imageview}>
                            <TouchableOpacity style={styles.upload_image_camera} onPress={() => Cameraphoto()}>
                                <Text>
                                    Take Photo
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.upload_image_gallery} onPress={() => Galleryphoto()}>
                                <Text>
                                    Upload from Gallery
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.image_camera_view}>
                            {console.log("Gallery Image URI:", gimage)}
                            {console.log("Camera Image URI:", cimage)}
                            {<Image source={{ uri: cimage }} style={styles.image_camera} />}
                            {<Image source={{ uri: gimage }} style={styles.image_camera} />}
                        </View>

                    </View>
                    <View style={styles.btnview}>
                        <View style={styles.saveview}>
                            <TouchableOpacity onPress={Updateproduct}>
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
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        // marginBottom: h * .045,
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
    upload_imageview: {
        // backgroundColor:'green',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    upload_image_camera: {
        width: w * .3,
        height: h * .05,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 30
    },
    upload_image_gallery: {
        width: w * .4,
        height: h * .05,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image_camera_view: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    image_camera: {
        height: 100,
        width: 100,
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 20,
        marginLeft: 20
    },
    inputview: {
        marginVertical: h * .007,
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
        marginTop: h * .025
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

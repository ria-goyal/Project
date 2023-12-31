// <===================================================================Import-Section-Start===================================================================================>
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, RefreshControl, SectionList, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, } from 'react-native-gesture-handler'
const w = Dimensions.get('screen').width
const h = Dimensions.get('screen').height
import pic from '../images/images/p1.jpeg'
import del from '../images/logos/delete.png'
import setting from '../images/logos/setting.png'
import userimg from '../images/logos/user2.png'
import { hr_bar, colors, heading } from '../global/style'
import { useNavigation } from '@react-navigation/native';
import { ProductGetrequest } from '../Data/ProductAPI'
import { ProductDeleterequest } from '../Data/ProductAPI'
import { WorkGetrequest } from '../Data/WorkAPI'
import { WorkDeleterequest } from '../Data/WorkAPI'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native';

// <===================================================================Import-Section-End===================================================================================>


// <===================================================================Logic-Section-Start===================================================================================>
export default function Account() {

    const navigation = useNavigation();
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [product, setproduct] = useState('')
    const [work, setwork] = useState('')
    const [refresh, setrefresh] = useState(false)

    useEffect(() => {
        user();
        getproductAPIdata();
        getworkAPIdata();
        Pullme();
    }, [])

    // <==================Navigation-Section-Start======================>

    function Settingscreen() {
        navigation.navigate('setting', { Refresh: Pullme} )
    }

    function Updatename() {
        navigation.navigate('setting')
    }
    function Workeditscreen(item) {
        navigation.navigate('workedit', { ...item })
    }

    function Producteditscreen(item) {
        navigation.navigate('productedit', { ...item })
    }
    function Workeditscreen(item) {
        navigation.navigate('workedit', { ...item })
    }

    function Producteditscreen(item) {
        navigation.navigate('productedit', { ...item })
    }

    // <==================Navigation-Section-End======================>


    // <==================Product-Section-Start======================>

    const getproductAPIdata = async () => {
        await ProductGetrequest().then(res => {
            // console.log(res.data);
            setproduct(res.data)
        })
            .catch(error => {
                console.log(error);
            })
    }

    function Productcard() {
        return (
            <>
                <FlatList
                    numColumns={1}
                    data={product}
                    renderItem={({ item }) => Renderproduct(item)}
                    keyExtractor={(item) => item._id}
                    listKey="product"
                />
            </>
        )
    }

    function Renderproduct(item) {
        return (
            <>
                <View>
                    {item.e_mail.toLowerCase() === email.toLowerCase() ?
                        <View style={styles.cards}>
                            <View style={styles.img_card}><Image source={pic} style={styles.pics} /></View>
                            <View style={styles.card_txt}>
                                <Text style={styles.title}>{item.p_name}</Text>
                                <Text style={styles.price}>{item.p_rate}</Text>
                                <TouchableOpacity onPress={() => Producteditscreen(item)}><Text style={styles.price}>+ EDIT</Text></TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={Deleteproduct} onLongPress={() => DeleteproductAPIdata(item)}>
                                <View style={styles.btn}>
                                    <Image source={del} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        :
                        null}
                </View>

            </>
        )
    }

    function Deleteproduct() {
        alert("long press delete button to permanently delete Product")
    }

    const DeleteproductAPIdata = async (item) => {
        // console.log("long press hora he");
        if (item && item._id) {
            // console.log("if ke under jara he", item._id);
            const id = item._id
            // console.log("if ke under jara he or id ye he", id);
            try {
                await ProductDeleterequest(id);
                alert("item deleted successfully")
                getproductAPIdata();
            } catch (error) {
                console.log(error);
            }
        }
    };

    // <==================Product-Section-End======================>


    // <==================Work-Section-Start======================>

    const getworkAPIdata = async () => {
        await WorkGetrequest().then(res => {
            // console.log(res.data);
            setwork(res.data)
        })
            .catch(error => {
                console.log(error);
            })
    }

    function Workcard() {
        return (
            <>
                <FlatList
                    numColumns={1}
                    data={work}
                    renderItem={({ item }) => Renderwork(item)}
                    keyExtractor={(item) => item._id}
                    listKey="work"
                />
            </>
        )
    }

    function Renderwork(item) {
        return (
            <>
                <View>
                    {item.e_mail.toLowerCase() === email.toLowerCase() ?
                        <View style={styles.cards}>
                            <View style={styles.img_card}><Image source={pic} style={styles.pics} /></View>
                            <View style={styles.card_txt}>
                                <Text style={styles.title}>{item.w_name}</Text>
                                <Text style={styles.price}>{item.w_rate}</Text>
                                <TouchableOpacity onPress={() => Workeditscreen(item)}><Text style={styles.price}>+ EDIT</Text></TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={Deletework} onLongPress={() => DeleteworkAPIdata(item)}>
                                <View style={styles.btn}>
                                    <Image source={del} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        :
                        null}
                </View>

            </>
        )
    }

    function Deletework() {
        alert("long press delete button to permanently delete Work")
    }

    const DeleteworkAPIdata = async (item) => {
        // console.log("long press hora he");
        if (item && item._id) {
            // console.log("if ke under jara he", item._id);
            const id = item._id
            // console.log("if ke under jara he or id ye he", id);
            try {
                await WorkDeleterequest(id);
                alert("item deleted successfully")
                getworkAPIdata();
            } catch (error) {
                console.log(error);
            }
        }
    };

    // <==================Work-Section-End======================>


    // <==================Other-Section-Start======================>

    async function user() {
        try {
            const email = await AsyncStorage.getItem('Email');
            const name = await AsyncStorage.getItem('Username');
            setemail(email);
            setname(name);
        }
        catch (e) {
            console.log(e);
        }
    }

    const Pullme = () => {
        setrefresh(true);
        // console.log("shuru hua");
        try {
            Promise.all([getworkAPIdata(), getproductAPIdata()]).then(() => {
                setrefresh(false);
                // console.log("khatam hua");
                user();
            });
        } catch (error) {
            console.error("Error in pull to refresh:", error);
            setrefresh(false);
            user();
        }
    };

    function Animation() {
        return (
            <>
                <View>
                    <Text style={{ fontSize: 20, color: 'black', }}>Login First</Text>
                    <TouchableOpacity onPress={Pullme}>
                        <LottieView style={{ width: w, height: h * .8 }} source={require('../Animations/login-girl1.json')} autoPlay loop />
                    </TouchableOpacity>
                </View>
            </>
        )
    }

    // <==================Other-Section-End======================>

    // <===================================================================Logic-Section-End===================================================================================>



    // <===================================================================Frontend-Section-Start===================================================================================>
    return (
        <>
            {email ?
                <View style={styles.container}>
                    <View><Text style={heading}> Your Account</Text></View>
                    <View style={styles.upper}>
                        <View style={styles.image_cont}>
                            <TouchableOpacity >
                                <Image source={userimg} style={styles.pics} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textt}>
                            <View><Text style={styles.name}>{name}</Text></View>
                            <View><Text style={styles.name1}>{email}</Text></View>
                            <View>
                                <TouchableOpacity style={styles.edit_btn} onPress={Updatename}>
                                    <Text style={styles.edit_btn_text}>+ Edit Username</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View >
                            <TouchableOpacity onPress={Settingscreen}>
                                <Image style={styles.setting_btn} source={setting} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={hr_bar}></View>
                    <SectionList
                        sections={[
                            { title: 'products', data: [product], key: 'product' },
                            { title: 'works', data: [work], key: 'work' },
                        ]}
                        renderItem={({ section }) => {
                            switch (section.title) {
                                case 'products':
                                    return <Productcard />;
                                case 'works':
                                    return <Workcard />;
                                default:
                                    return null;
                            }
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        refreshControl={<RefreshControl refreshing={refresh} onRefresh={Pullme} />}
                    />
                </View>
                :
                <ScrollView refreshControl={
                    <RefreshControl refreshing={refresh} onRefresh={Pullme} />
                } >
                    {Animation()}
                </ScrollView>

            }
        </>
    )
}

const styles = StyleSheet.create({
    upper: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        marginVertical: h * .01,
        marginHorizontal: w * .03,
        paddingHorizontal: w * .02,
        paddingVertical: h * .01
    },
    image_cont: {
        flex: 1,
        height: h * .1,
        borderRadius: w * .5,
        overflow: 'hidden'
    },
    textt: {
        flex: 2,
        paddingHorizontal: w * .04,
        paddingVertical: h * .01
    },
    setting_btn: {
        width: 35,
        height: 35,
        marginTop: 5,
        marginRight: 5
    },
    btn: {
        flex: 1,
        alignItems: 'flex-end',
    },
    cards: {
        flexDirection: 'row',
        marginHorizontal: w * .05,
        marginTop: h * .02,
        backgroundColor: 'white',
        paddingHorizontal: w * .03,
        paddingVertical: h * .01,
        borderRadius: w * .03,
        elevation: 10
    },
    img_card: {
        flex: 1.3,
        height: h * .11,
        borderRadius: w * .04,
        overflow: 'hidden'
    },
    pics: {
        width: '100%',
        height: '100%'
    },
    card_txt: {
        flex: 2,
        padding: w * .03,

    },
    title: {
        color: 'black',
        fontSize: 18
    },
    price: {
        color: 'black',
        fontSize: 17
    },
    container: {
        backgroundColor: colors.back,
        flex: 1
    },

    name: {
        fontSize: 22,
        color: 'black'
    },
    name1: {
        fontSize: 12,
        color: 'black'
    },
    edit_btn_text: {
        color: '#1F4FBE',
        fontSize: 16
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


import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Scrollview } from 'react-native'
import React from 'react'
import heart from '../images/logos/heart.png'
const w = Dimensions.get('screen').width
const h = Dimensions.get('screen').height


const Cards = () => {
    return (
        <>

            <View style={styles.container}>

                <View style={styles.inner_container}>
                <View style={styles.card}>
                        <View style={styles.card_img}></View>
                        <View style={styles.textbox}>
                            <View>
                                <Text style={styles.card_text}>Product Name</Text>
                                <Text style={styles.card_text}>Rs.100/-</Text>
                            </View>
                            <View style={styles.btn}><TouchableOpacity><Image source={heart}></Image></TouchableOpacity></View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.card_img}></View>
                        <View style={styles.textbox}>
                            <View>
                                <Text style={styles.card_text}>Product Name</Text>
                                <Text style={styles.card_text}>Rs.100/-</Text>
                            </View>
                            <View style={styles.btn}><TouchableOpacity><Image source={heart}></Image></TouchableOpacity></View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.card_img}></View>
                        <View style={styles.textbox}>
                            <View>
                                <Text style={styles.card_text}>Product Name</Text>
                                <Text style={styles.card_text}>Rs.100/-</Text>
                            </View>
                            <View style={styles.btn}><TouchableOpacity><Image source={heart}></Image></TouchableOpacity></View>
                        </View>
                    </View>
                </View>
            </View>

        </>
    )
}

export default Cards

const styles = StyleSheet.create({
    inner_container: {
        flexDirection: 'row',
        // backgroundColor:'red',
        marginHorizontal: w * .02,

        flexWrap: 'wrap'
    },
    card: {
        width: w * .44,
        backgroundColor: 'white',
        marginHorizontal: w * .02,
        marginVertical: h * .01,
        borderRadius: w * .05,
        overflow: 'hidden',
        elevation: 1
    },
    card_img: {
        height: h * .2,
        backgroundColor: 'pink'
    },
    card_text: {
        fontSize: 19,
        color: 'black'
    },
    textbox: {
        padding: w * .02,
        flexDirection: 'row',
        
    },
    btn:{
        marginHorizontal:w*.027,
       
    }
})
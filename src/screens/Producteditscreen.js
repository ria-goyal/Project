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

export default function Productedit() {
    return (
        <>
            <View style={styles.container}>
            <TouchableOpacity>
                    <View style={styles.arrowview}>
                        <Image source={arrow} style={styles.arrow} />
                    </View>
                </TouchableOpacity>
                <View style={styles.edittextview}>
                    <Text style={styles.edittext}>Edit Product Details</Text>
                </View>
                <View style={styles.inputview}>
                    <Text style={styles.text}>Product Name:</Text>
                    <TextInput placeholder='Genius Maths' style={styles.inputtext} />
                </View>
                <View style={styles.inputview}>
                    <Text style={styles.text}>Offered Price:</Text>
                    <TextInput placeholder='Rs.230/-' style={styles.inputtext} />
                </View>
                <View style={styles.inputview}>
                    <Text style={styles.text}>Description:</Text>
                    <TextInput placeholder='2 Year old, good in condition' style={styles.inputtext} />
                </View>
                <View style={styles.inputview}>
                    <Text style={styles.text}>Upload Image:</Text>
                    <TextInput placeholder='Image' style={styles.inputtext} />
                </View>
                <View style={styles.btnview}>
                    <View style={styles.saveview}>
                        <TouchableOpacity>
                            <View style={styles.savebtn}>
                                <Text style={styles.savebtntext}>SAVE</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.resetview}>
                        <TouchableOpacity>
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
        marginLeft: w*.03,
        marginTop:h*.01,
        // backgroundColor:'red'
    },
    edittextview: {
        alignItems: 'center',
        marginBottom:h*.045,
        marginVertical:h*.02
    },
    edittext: {
        fontSize: w * .07,
        fontWeight:'600',
        color:'black'
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
        flexDirection:'row',
        justifyContent:'center',
        marginTop:h*.025
      },
      savebtn: {
        backgroundColor: '#FFC545',
        alignItems: 'center',
        justifyContent: 'center',
        height: h * 0.065,
        width: w * 0.45,
        borderRadius: w*.08,
        marginHorizontal:w*.02
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
        borderRadius: w*.08,
        marginHorizontal:w*.02
      },
      resetbtntext: {
        fontSize: 25,
        fontWeight: '600',
        color: 'black',
      },
})
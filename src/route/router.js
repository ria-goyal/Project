import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
import { Text, View } from 'react-native'
// import Productinfoscreen from '../screens/Productinfocardscreen'

import Productedit from '../screens/Producteditscreen'
import Workedit from '../screens/Workeditscreen'

import Startscreen from '../screens/Startscreen'
import HomeScreen from '../screens/HomeScreen'
import Productinfocard from '../screens/Productinfocardscreen'
import Workinfocard from '../screens/Workinfocardscreen'
import Loginscreen from '../screens/Loginscreen'
import Signupscreen from '../screens/Signupscreen'
import Forgotpassword from '../screens/Forgotpasswordscreen'
import Verificationscreen from '../screens/Verificationscreen'
import Newpasswordscreen from '../screens/Newpasswordscreen'

const Stack = createStackNavigator();
export default function Router() {
    return (
        <>
            <NavigationContainer initialRouteName="start">
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="start" component={Startscreen} />
                    <Stack.Screen name="home" component={HomeScreen} />
                    <Stack.Screen name="productcard" component={Productinfocard} />
                    <Stack.Screen name="workcard" component={Workinfocard} />
                    <Stack.Screen name="login" component={Loginscreen} />
                    <Stack.Screen name="register" component={Signupscreen} />
                    <Stack.Screen name="forgotpassword" component={Forgotpassword} />
                    <Stack.Screen name="verification" component={Verificationscreen} />
                    <Stack.Screen name="newpassword" component={Newpasswordscreen} />
                </Stack.Navigator>
                
            </NavigationContainer>
            
            

        </>
    )
} 
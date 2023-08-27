import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Text,View} from 'react-native'
import Startscreen from '../screens/Startscreen'
import Registerscreen from '../screens/Registerscreen'
import Loginscreen from '../screens/Loginscreen'
import Productinfoscreen from '../screens/Productinfocardscreen'
import Workinfocard from '../screens/Workinfocardscreen'
import HomeScreen from '../screens/HomeScreen'
import Forgotpassword from '../screens/Forgotpasswordscreen'
import Verificationscreen from '../screens/Verificationscreen'
import Newpasswodscreen from '../screens/Newpasswordscreen'
import Account from '../screens/Account'
import Sell from '../screens/Sell'
import Freelance from '../screens/Freelance'
const tab=createBottomTabNavigator();

export default function Router(){
    return(<>
        <NavigationContainer>
            <tab.Navigator screenOptions={
                {
                    headerShown:false
                }
            }>
                <tab.Screen name='Home' component={HomeScreen}/>
                <tab.Screen name='Sell' component={Sell}/>
                <tab.Screen name='Freelance' component={Freelance}/>
                <tab.Screen name='Account' component={Account}/>
            </tab.Navigator>
        </NavigationContainer>
        
    </>
    )
} 
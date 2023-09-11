import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import Account from '../screens/Account'
import Sell from '../screens/Sell'
import Freelance from '../screens/Freelance'
const tab = createBottomTabNavigator();
export default function Bottomnavigation() {
    return (
        <>
            <NavigationContainer independent={true} initialRouteName="home">
            <tab.Navigator screenOptions={
                {
                    headerShown:false
                }
            }>
                {/* <tab.Screen name='Home' component={HomeScreen}/> */}
                <tab.Screen name='Sell' component={Sell}/>
                <tab.Screen name='Freelance' component={Freelance}/>
                <tab.Screen name='Account' component={Account}/>
            </tab.Navigator>
        </NavigationContainer>
        </>
    )
} 
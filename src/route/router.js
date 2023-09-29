import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, View } from 'react-native'
// import Productinfoscreen from '../screens/Productinfocardscreen'
import Review from '../screens/Review'
import Productedit from '../screens/Producteditscreen'
import Workedit from '../screens/Workeditscreen'
import Account from '../screens/Account'
import Sell from '../screens/Sell'
import Freelance from '../screens/Freelance'
import Startscreen from '../screens/Startscreen'
import HomeScreen from '../screens/HomeScreen'
import Productinfocard from '../screens/Productinfocardscreen'
import Workinfocard from '../screens/Workinfocardscreen'
import Loginscreen from '../screens/Loginscreen'
import Signupscreen from '../screens/Signupscreen'
import Forgotpassword from '../screens/Forgotpasswordscreen'
import Verificationscreen from '../screens/Verificationscreen'
import Newpasswordscreen from '../screens/Newpasswordscreen'
const tab = createBottomTabNavigator();
const Stack = createStackNavigator();
 function StackNav() {
    return (
        <>
             
                <Stack.Navigator 
                initialRouteName="start"
                screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="start" component={Startscreen} />
                    <Stack.Screen name="home" component={TabNav} />
                    <Stack.Screen name="productcard" component={Productinfocard} />
                    <Stack.Screen name="workcard" component={Workinfocard} />
                    <Stack.Screen name="login" component={Loginscreen} />
                    <Stack.Screen name="register" component={Signupscreen} />
                    <Stack.Screen name="forgotpassword" component={Forgotpassword} />
                    <Stack.Screen name="verification" component={Verificationscreen} />
                    <Stack.Screen name="newpassword" component={Newpasswordscreen} />      
                </Stack.Navigator>
        </>
    )
} 
 function TabNav(){
    return(
        <>
        <tab.Navigator
initialRouteName='home'
screenOptions={
    {
        headerShown:false
    }
}>
    <tab.Screen name='Home' component={HomeScreen}/>
    <tab.Screen name='Sell' component={Sell}/>
    <tab.Screen name='Freelance' component={Freelance}/>
    <tab.Screen name='Account' component={Account}/>
</tab.Navigator>
</>
    )
}
export default function Router(){
   return(
    <NavigationContainer>
    <StackNav/>
</NavigationContainer>
   )
}
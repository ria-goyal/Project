import React from 'react'
import {Text,View} from 'react-native'
import Router from './src/route/Router'
// import ImageSliderComponent from './src/component/Imageslidercomponent'
import {ContextAuth} from './src/Context/Context'
import {productdetails,workdetails,contactdetails} from './src/Data/Data'



export default function App(){

    const data ={
        productdetails,workdetails,contactdetails
      }
    return(
        <ContextAuth.Provider value={data}>
        <Router/>
 </ContextAuth.Provider>
      
    )
} 
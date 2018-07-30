import React from 'react'
import {createStackNavigator} from 'react-navigation'
import HomeScreen from './screen/HomeScreen'
import SplashScreen from "./screen/SplashScreen";

const appNavigator = createStackNavigator({
    splash: {
        screen: SplashScreen
    },
    home: {
        screen: HomeScreen,
        header: {
            visible: false
        }
    }
});

export default appNavigator
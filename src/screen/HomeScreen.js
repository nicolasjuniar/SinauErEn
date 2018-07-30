import React, {Component} from 'react'
import {StatusBar, View, ToolbarAndroid} from 'react-native'
import {getListOrang} from "../actions"
import Color from 'react-native-material-color';
import Colors from '../styles/Colors'
import KateringRatingScreen from "./Home/KateringRatingScreen";
import {createTabNavigator} from 'react-navigation'

type Props = {}

const TabUser = createTabNavigator({
    Rekomendasi: KateringRatingScreen,
    Sekitar: KateringRatingScreen
}, {
    backBehavior: 'none',
    tabBarOptions: {
        labelStyle: {
            fontSize: 18,
            fontWeight: 'bold'
        },
        upperCaseLabel: false,
        activeTintColor: Color.White,
        indicatorStyle: {
            backgroundColor: Colors.lightTosca,
        },
        inactiveTintColor: Color.White,
        style: {
            backgroundColor: Colors.primary
        },
        activeBackgroundColor: Colors.grey
    }
});

export default class HomeScreen extends Component<Props> {

    static navigationOptions = {
        header:null
    };

    render() {
        return (
            <View style={{
                backgroundColor: Color.White,
                flex: 1
            }}>
                <StatusBar
                    backgroundColor={Color.White}
                    barStyle="dark-content"
                />
                <ToolbarAndroid
                    title="Beranda"
                    titleColor={Colors.primary}
                    style={{
                        height: 56
                    }}
                    subtitleColor={Colors.primary}
                    actions={[{title: 'Masuk',  show: 'always'}]} />
                <TabUser/>
            </View>
        )
    }
}
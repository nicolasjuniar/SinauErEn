import React, {Component} from 'react'
import {Image, StatusBar, Text, ToastAndroid, View} from 'react-native'
import Colors from '../styles/Colors'
import { StackActions,NavigationActions } from 'react-navigation'
import Color from 'react-native-material-color'

export default class SplashScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    componentWillMount() {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'home' })],
        });
        setTimeout(() => {
            this.props.navigation.dispatch(resetAction);
        }, 2000);
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center'}}>
                <StatusBar
                    backgroundColor={Colors.primary}
                    barStyle="light-content"
                />
                <Image
                    source={require('../asset/image/ic_launcher.png')}/>
                <Text style={{
                    color:Color.White,
                    fontSize:20,
                    marginTop:4
                }}>porkat</Text>
            </View>
        );
    }
}
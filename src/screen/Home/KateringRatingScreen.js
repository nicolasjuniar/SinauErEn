import React, {Component} from 'react'
import {FlatList, Image, RefreshControl, Text, View} from 'react-native'
import {getListKateringByRating} from "../../actions";
import {connect} from "react-redux";
import Colors from "../../styles/Colors";
import Color from "react-native-material-color"
import Icon from "react-native-vector-icons/MaterialIcons"
import Global from "../../styles/Global";

export class KateringRatingScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        };
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.props.getListKateringByRating().then(() => {
            this.setState({refreshing: false});
        });
    };


    componentDidMount() {
        this.props.getListKateringByRating()
    }

    render() {
        const {listKatering} = this.props;
        const {error} = this.props;
        console.log(JSON.stringify(listKatering.listKatering))
        return (
            <View Style={{
                flex: 1
            }}>
                {
                    listKatering ?
                        <FlatList
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this._onRefresh}
                                />
                            }
                            data={listKatering.listKatering}
                            renderItem={({item}) => {
                                return (
                                    <View style={{
                                        flex: 1,
                                        alignSelf: 'stretch',
                                        justifyContent: 'center',
                                        margin: 4,
                                        borderWidth: 1,
                                        borderColor: Colors.primary
                                    }}>
                                        <Image
                                            style={{
                                                flex: 1,
                                                alignSelf: 'stretch',
                                                height: 180
                                            }}
                                            source={{uri: Global.BASE_URL + 'foto/katering/' + item.foto}}
                                        />
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                flex: 1,
                                                justifyContent: 'space-between'
                                            }}>
                                            <Text style={{
                                                color: Colors.titleColor,
                                                marginLeft: 14,
                                                marginTop: 8,
                                                fontFamily: 'submarine_beach',
                                                fontSize: 16
                                            }}
                                            >{item.nama_katering}</Text>
                                            <View
                                                style={{
                                                    flexDirection: 'row'
                                                }}>
                                                <Icon
                                                    name="star"
                                                    size={18}
                                                    color={Color.Yellow}
                                                    style={{
                                                        marginRight: 8,
                                                        marginTop: 8
                                                    }}/>
                                                <Text style={{
                                                    color: Colors.titleColor,
                                                    marginRight: 14,
                                                    marginTop: 8,
                                                    fontFamily: 'submarine_beach',
                                                    fontSize: 16
                                                }}
                                                >{item.rating}</Text>
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                marginRight: 14,
                                                marginLeft: 14,
                                                marginTop: 4,
                                                borderBottomColor: Colors.lineColor,
                                                borderBottomWidth: 1,
                                                alignSelf: 'stretch'
                                            }}
                                        />
                                        <View
                                            style={{
                                                marginTop: 4,
                                                flexDirection: 'row'
                                            }}>
                                            <Icon
                                                name="map"
                                                size={18}
                                                color={Colors.primary}
                                                style={{
                                                    marginLeft: 14,
                                                }}/>
                                            <Text style={{
                                                color: Colors.descriptionTextColor,
                                                fontFamily: 'submarine_beach',
                                                fontSize: 13,
                                                marginLeft: 4
                                            }}
                                            >{item.alamat}</Text>
                                        </View>
                                        <View
                                            style={{
                                                marginTop: 4,
                                                flexDirection: 'row',
                                                marginBottom: 10
                                            }}>
                                            <Icon
                                                name="place"
                                                size={18}
                                                color={Colors.primary}
                                                style={{
                                                    marginLeft: 14,
                                                }}/>
                                            <Text style={{
                                                color: Colors.descriptionTextColor,
                                                fontFamily: 'submarine_beach',
                                                fontSize: 13,
                                                marginLeft: 4
                                            }}
                                            >{item.longitude}</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        /> : null
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listKatering: state.HomeReducer
    }
};

const mapDispatchToProps = (dispatch) => ({
    getListKateringByRating: () => dispatch(getListKateringByRating())
});

export default connect(mapStateToProps, mapDispatchToProps)(KateringRatingScreen)
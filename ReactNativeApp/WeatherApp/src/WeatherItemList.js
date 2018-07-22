import React, { Component } from 'react';
import {
    AppRegistry,
    FlatList, StyleSheet, Text, View, Image, ImageBackground,
    Alert, Platform, TouchableHighlight, TouchableOpacity
} from 'react-native';
import { horizontalFlatListData } from '../data/database';
// import Icon from 'react-native-vector-icons/Ionicons';

class HorizontalFlatListItem extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 110,
                    height: 150,
                    borderRadius: 10,
                    borderWidth: 3,
                    borderColor: 'white',
                    margin: 10,
                }}>
                <TouchableOpacity onPress={() => {
                    alert(`You pressed: ${this.props.item.hour}\n ${this.props.item.degrees}°C`);
                }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                >
                </TouchableOpacity>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 20
                }}>{this.props.item.hour}</Text>
                {/* <Image style={
                    {
                        height: 30,
                        width: 30
                    }
                } source={require(thisprops.item.status.icon)}
                /> */}
                <Text style={{
                    fontSize: 16,
                    margin: 1,
                    color: 'white',
                }}>{this.props.item.status}</Text>
                <Text style={{
                    fontSize: 16,
                    margin: 5,
                    fontWeight: 'bold',
                    color: 'white',
                }}>{this.props.item.degrees} °C</Text>
            </View>
        );
    }
}
export default class HorizontalFlatList extends Component {

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: Platform.OS === 'ios' ? 34 : 0
                }}>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}>
                    <Image style={{
                        flex: 1,
                        flexDirection: 'column',
                        width: null,
                        height: null,
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                    }}
                        source={require('../img/weather.jpg')}
                    >
                    </Image>
                </View>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                    backgroundColor: 'transparent',
                    margin: 10,
                }}>Your Weather Today</Text>
                <View style={{ height: 170 }}>
                    <FlatList
                        style={{
                            backgroundColor: 'black',
                            opacity: 0.5,
                        }}
                        horizontal={true}
                        data={horizontalFlatListData}
                        renderItem={({ item, index }) => {
                            return (
                                <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>
                                </HorizontalFlatListItem>);
                        }}
                        keyExtractor={(item, index) => item.hour}
                    >
                    </FlatList>
                </View>
            </View>
        );
    }
}
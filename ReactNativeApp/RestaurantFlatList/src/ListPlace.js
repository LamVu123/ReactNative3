import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text
} from 'react-native';
import data from './data';
import PlaceCmp from './PlaceCmp';

class ListPlace extends Component {
    state = {}

    rdItem = (item) => {
        return (<PlaceCmp data={item.item}></PlaceCmp>)
    }

    keyEx = (item, index) => index.toString();
    render() {
        return (
            <View style={styles.container}>
                <Text style = {{alignItems: 'center',fontWeight: "bold",
                    fontSize: 25}}>Place</Text>
                <View style={styles.restaurantContainer}>
                    <FlatList data={data} renderItem={this.rdItem} keyExtractor={this.keyEx} column="1">
                    </FlatList>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    restaurantContainer: {
        flex: 1,
        width: "100%"
    }
});
export default ListPlace;
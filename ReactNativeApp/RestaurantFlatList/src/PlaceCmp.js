import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

class Place extends PureComponent {
    state = {}

    rdItem = (item) => {
        return (
          <View style={item.item ? styles.colorBlock : styles.uncolorBlock}></View>
        )
      }
  
      keyEx = (item, index) => index.toString();

    render() {
        return (
            <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
              <View style={[styles.imageBorder , {backgroundColor: this.props.data.color}]}>
                <Image style={styles.image} source ={this.props.data.image}/>
                
              </View>
            </View>

            <View style={styles.ContentContainer}>
              <Text style={styles.restaurant}>{this.props.data.name}</Text>
              <Text>{this.props.data.address}</Text>
              <View style={styles.blocksContainer}>
                <FlatList style={styles.flatlistBlock} data={this.props.data.rating} renderItem={this.rdItem} keyExtractor={this.keyEx}>
                </FlatList>
                <Text style={styles.type}>{this.props.data.type}</Text>
              </View>
            </View>

            <View style={styles.distanceContainer}>
              <Text>{this.props.data.distance}</Text>
            </View>
          </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      paddingHorizontal: 15,
      borderBottomWidth: 2,
      borderBottomColor: "grey",
      paddingVertical: 15
    },
    imageContainer: {
      flex: 1,
      // alignItems: "center"
    },
    ContentContainer: {
      flex: 4,
      paddingLeft: 15,
      paddingTop: 5,
      justifyContent: "space-between"
    },
    imageBorder: {
      width: 55,
      height: 55,
      borderRadius: 200,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 30
    },
    image : {
      width: "50%",
      height: "50%",
    },
    blocksContainer: {
      flexWrap: 'wrap', 
      alignItems: 'center',
      flexDirection:'row',
      marginTop: 10
    },
    flatlistBlock: {
      flexWrap: "wrap",
      flexDirection: "row"
    },
    colorBlock: {
      width: 12,
      height: 6,
      backgroundColor: "green",
      marginRight: 5
    },
    uncolorBlock: {
      width: 12,
      height: 6,
      backgroundColor: "grey",
      marginRight: 5
    },
    restaurant: {
      fontWeight: "bold",
      fontSize: 16
    },
    type: {
      paddingLeft: 15,
    },
    distanceContainer: {
      justifyContent: "flex-end"
    }
  })

export default Place;
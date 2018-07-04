/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
         */}
        <Image style = {styles.img} source= {require('./logo.png')}/>
        
        <Text style={styles.content}>
                <Text style = {{
                  
                  fontSize : 18,
                  }}>
                  {'Jul 6 2018 - 21:00\n\n'}
                </Text>
                
          {'Viet Nam                   '}
          <Image style = {styles.imgIcon} source= {require('./VN.png')}/>
          {'          '}
          <Image style = {styles.imgIcon} source= {require('./FR.png')}/>
          {'                      France'}
        </Text>

        <Text style={styles.content}>
                <Text style = {{
                  fontSize : 18,
                  }}>
                  {'Jul 7 2018 - 21:00\n\n'}
                </Text>
                
          {'Viet Nam                 '}
          <Image style = {styles.imgIcon} source= {require('./VN.png')}/>
          {'          '}
          <Image style = {styles.imgIcon} source= {require('./BZ.png')}/>
          {'                      Brazil'}
        </Text>

        <Text style={styles.content}>
                <Text style = {{
                  fontSize : 18,
                  }}>
                  {'Jul 8 2018 - 21:00\n\n'}
                </Text>
                
          {'Viet Nam                    '}
          <Image style = {styles.imgIcon} source= {require('./VN.png')}/>
          {'          '}
          <Image style = {styles.imgIcon} source= {require('./BG.png')}/>
          {'                     Belgium'}
        </Text>

        <Text style={styles.content}>
                <Text style = {{
                  fontSize : 18,
                  }}>
                  {'Jul 8 2018 - 21:00\n\n'}
                </Text>
                
          {'Viet Nam                   '}
          <Image style = {styles.imgIcon} source= {require('./VN.png')}/>
          {'          '}
          <Image style = {styles.imgIcon} source= {require('./RS.png')}/>
          {'                      Russia'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    
  },
  img: {
    //textAlign: 'center',
    //fontSize: 10,
    marginTop: 50,
    marginLeft: 200,
    height: 250,
    width: 250,
  },
  imgIcon: {
    height: 50,
    width: 50,
  },
  content: {
    textAlign: 'center',
    fontSize: 20,
    color: '#e6e6e6',
    borderRadius: 4,
    borderWidth: 10,
    borderColor: '#012631',
    backgroundColor: '#012631',
    height: 100,
    width: 500,
    marginLeft: 50,
    paddingLeft: 20,
    marginTop : 20,
  }
});

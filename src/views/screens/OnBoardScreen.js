import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View, ImageBackground} from 'react-native';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

const OnBoardScreen = ({navigation}) => {
  return (
    <ImageBackground source={require('../../assets/background1.jpg')} style={styles.containers}>
      <View style={styles.textContainer}>
        <Text style={styles.title}> Flowers make your life more colorful</Text>
        <View style={styles.line_arrows}>
          <Image style={styles.line_arrow} source={require('../../assets/line1.png')}/>
        </View>
      </View>
      
      <View style={styles.button}>
        <PrimaryButton onPress={() => navigation.navigate('Home')} title={"Let's go"}/>
      </View>
    </ImageBackground>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    opacity: 1
  },


  textContainer: {
    flex: 1,
    paddingBottom: 40,
  },

  title: {
    width: 300,
    paddingTop: 60,
    paddingLeft: 10,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#003300'
  },

  line_arrow: {
    height: 80,
    width: 80,
  },

  line_arrows: {
    paddingLeft: 100,
    paddingTop: 20,
  },

  button: {
    paddingBottom: 50,
    paddingLeft: 150,
  }
});

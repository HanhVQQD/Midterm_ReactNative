import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

const OnBoardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.containers}>
      <View style={styles.container}>
        <Image
          style={styles.bigImage}
          source={require('../../assets/onboardImage.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>Delicious Food</Text>
          <Text style={styles.text}>
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
        <PrimaryButton onPress={() => navigation.navigate('Home')} title={"Get Started"}/>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    height: 400,
  },

  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },

  bigImage: {
    width: '100%',
    resizeMode: 'contain',
    top: -150,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },

  text: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.grey,
  },

  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },

  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});

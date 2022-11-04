import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import COLORS from '../../consts/colors';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.headers}>
      <View style={styles.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28}}>Hello, </Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
              Hanh
            </Text>
          </View>
          <Text style={styles.userWant}>What do you wnat today?</Text>
        </View>
        <Image style={styles.profileImage}
            source={require('../../assets/person.png')}
        />
      </View>
      <View style={{marginTop: 40, flexDirection: 'row', paddingHorizontal: 20,}}>
        <View style={styles.inputContainer}></View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headers: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  userWant: {
    marginTop: 5,
    fontSize: 22,
    color: COLORS.grey,
  },

  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  }
});

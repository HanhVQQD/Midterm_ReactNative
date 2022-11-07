import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import COLORS from '../../consts/colors';

const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.btnContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...styles.btnContainer, backgroundColor: COLORS.white}}>
        <Text style={{...styles.title, color: COLORS.primary}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const AddToCart = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...styles.AddToCart}}>
        <Text style={{...styles.title}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {color: '#E0EEE0', fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    height: 110,
    width: 110,
    borderRadius: 110,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1a09f',
    color: '#EE1289',
  },

  AddToCart: {
    height: 60,
    width: 200,
    borderRadius: 50,
    marginLeft: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AD8184',
    color: COLORS.white,
  }
});

export {PrimaryButton, SecondaryButton, AddToCart};
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { AddToCart } from '../components/Button';

const ProfileScreen = ({navigation}) => {

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
        <View style={styles.header}>
            <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Profile</Text>
        </View>
        <View style={styles.images}>
            <Image style={styles.image} source={require('../../assets/person.jpg')}/>
        </View>
        <View style={styles.contents}>
            <View style={styles.content}>
                <Text style={styles.text}>Name: Doan Thi My Hanh</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>Email: hanh.doan@gmail.com</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>Phone number: 0964261512</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>Your major: Infomation Technology</Text>
            </View>
            <View style={{ paddingTop: 20,}}>
                <AddToCart title="Change your info" />
            </View>
        </View>
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
      },

      images: {
        paddingTop: 10,
        paddingLeft: 100,
      },

      image: {
        height: 150,
        width: 150,
        borderRadius: 150,
      }, 

      contents: {
        paddingHorizontal: 20,
        marginTop: 50,
        height: '100%',
        backgroundColor: '#EFE0E1',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingTop: 20,
      },

      content: {
        marginTop: 20,
        paddingHorizontal: 20,
        height: '5%',
        backgroundColor: COLORS.white,
        borderWidth:  2,  
        borderColor:  COLORS.primary,
        borderRadius: 20,
      },

      text: {
        color: COLORS.dark,
        fontSize: 18,
        textAlign: 'left',
        paddingTop: 10,
      }
});

export default ProfileScreen;
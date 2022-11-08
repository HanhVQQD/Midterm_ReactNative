import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';
import COLORS from '../../consts/colors';
import CartScreen from '../screens/CartScreen';
import Map_view from '../screens/Map_view';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator sceneContainerStyle={{backgroundColor: 'white'}}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {},
            tabBarIcon: ({focused}) => (
              <Icon
                style={{color: focused ? 'red' : 'black'}}
                name="home-filled"
                size={30}
                color="black"
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {},
            tabBarIcon: ({focused}) => (
                <View
                style={{
                  height: 60,
                  width: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: COLORS.white,
                  borderColor: COLORS.primary,
                  borderWidth: 2,
                  borderRadius: 30,
                  top: -25,
                  elevation: 5,
                }}>
                <Icon style={{color: focused ? 'red' : 'black'}} name="search" color={COLORS.primary} size={28} />
              </View>
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="Map"
        component={Map_view}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {},
            tabBarIcon: ({focused}) => (
              <IconFA5
                style={{color: focused ? 'red' : 'black'}}
                name="map-marker-alt"
                size={30}
                color="black"
              />
            ),
            headerShown: false,
          };
        }}
      />

      
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  icon: {width: 30, height: 30},
});

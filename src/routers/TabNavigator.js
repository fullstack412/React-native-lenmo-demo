/* eslint-disable import/no-unresolved */
import React from 'react';
import { 
  Image, 
  View, 
  StyleSheet,
} from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { 
  createBottomTabNavigator, 
} from 'react-navigation-tabs';

import Homenavi from "./HomeNavigator";
import Loandetail from "../containers/LoandetailContainer";

const iconHome = require('../../assets/images/tabbar/home.png');
const iconSearch = require('../../assets/images/tabbar/search.png');
const iconNotification = require('../../assets/images/tabbar/notification.png');
const iconFollow = require('../../assets/images/tabbar/follow.png');

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#121212',
    paddingHorizontal: 10,
  },
  tabBarItemContainerFocused: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#fff',
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
    tintColor: 'gray'
  },
  tabBarIconFocused: {
    tintColor: '#121212',
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },
  headerCaption: {
    fontFamily: 'Lato-Regular',
    color: '#fff',
    fontSize: 18,
  },
});

const tabBarVisible = false;
// Create a tab bar controller
const tabNavi = createBottomTabNavigator(
  {
    Home: {
      screen: Homenavi
    },
    Search: {
      screen: Homenavi
    },
    Notification: {
      screen: Homenavi
    },
    Follow: {
      screen: Homenavi
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Home':
            iconSource = iconHome;
            break;
          case 'Search':
            iconSource = iconSearch;
            break;
          case 'Notification':
            iconSource = iconNotification;
            break;
          case 'Follow':
            iconSource = iconFollow;
            break;
          default:
            iconSource = iconHome;
        }
        return (
          <View style={styles.tabBarItemContainer, focused}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: true,
      style: {
        backgroundColor: "#F8F8F8",
        borderTopWidth: 0.3,
        borderTopColor: 'gray',
      },
      labelStyle: {
        color: "gray",
      },
    },
  },
);

export default createStackNavigator(
  {
    Tab: { screen: tabNavi },
    Loandetail: { screen: Loandetail},
  },
  {
    initialRouteName: "Tab",
    headerMode: "none"
  }
);
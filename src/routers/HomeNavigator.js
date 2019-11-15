import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import Home from "../containers/HomeContainer";

const iconHome = require('../../assets/images/tabbar/home.png');

const stackNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

// stackNavigator.);

export default createAppContainer(stackNavigator);

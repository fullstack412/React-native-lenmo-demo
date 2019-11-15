import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import SideBar from "../containers/SlidebarContainer";
import Tab from "./TabNavigator";

export default createDrawerNavigator(
  {
    Tabnavi: { screen: Tab }
  },
  {
    initialRouteName: "Tabnavi",
    contentComponent: props => <SideBar {...props} />
  }
);
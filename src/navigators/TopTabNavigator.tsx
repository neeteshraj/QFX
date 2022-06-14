import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {NavigationContainer} from '@react-navigation/native';
import NowShowingScreen from '../screens/TabScreens/NowShowing';
import CommingSoonScreen from '../screens/TabScreens/CommingSoon';
import CinemasScreen from '../screens/TabScreens/Cinemas';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="NOW SHOWING" component={NowShowingScreen} />
      <Tab.Screen name="COMING SOON" component={CommingSoonScreen} />
      <Tab.Screen name="CINEMAS" component={CinemasScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;

import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import LogoDisplayScreen from '../screens/DrawerScreens/LogoDisplay';
// import HomeScreen from '@screens/DrawerScreens/Home';
import TopTabNavigator from './TopTabNavigator';
import LoginScreen from '../screens/DrawerScreens/Login';
import LocationsScreen from '../screens/DrawerScreens/Locations';
import SupportScreen from '../screens/DrawerScreens/Support';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Logo" component={LogoDisplayScreen} />
        <Drawer.Screen name="Home" component={TopTabNavigator} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Locations" component={LocationsScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

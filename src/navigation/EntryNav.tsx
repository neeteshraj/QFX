import React, {FC, useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from '@navigation/DrawerNavigator/Drawer';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @EntryNavigation
 **/

const Stack = createStackNavigator();

const EntryNavigation: FC<IProps> = () => {
  // const [showSplashScreen, setShowSplashScreen] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowSplashScreen(false);
  //   }, 3000);
  // }, []);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Landing" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default EntryNavigation;

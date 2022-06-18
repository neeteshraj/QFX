import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from '@navigation/DrawerNavigator/Drawer';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @EntryNavigation
 **/

const Stack = createStackNavigator();

/**
 * It's a function that returns a Stack.Navigator component that has a screenOptions prop that has a
 * headerShown prop that is set to false
 * @returns A Stack.Navigator component with a Stack.Screen component nested inside.
 */
const EntryNavigation: FC<IProps> = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Landing" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default EntryNavigation;

import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import EntryNavigation from '@navigation/EntryNav';
import MovieDetailsWrapper from '@components/Wrappers/MovieDetails/MovieDetailsWrapper';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @StackScreen
 **/
const Stack = createStackNavigator();

const StackScreen: FC<IProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={EntryNavigation} />
        <Stack.Screen
          name="MovieDetailsWrapper"
          component={MovieDetailsWrapper}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreen;

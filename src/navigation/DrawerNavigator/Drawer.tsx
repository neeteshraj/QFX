import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import colors from '@assets/styles/colors';
import Logo from '@screens/Logo/Logo';
import Login from '@screens/Login/Login';
import HomeWrapper from '@components/Wrappers/HomeWrapper/Home';
import LocationWrapper from '@components/Wrappers/LocationWrapper/Location';
import SupportWrapper from '@components/Wrappers/SupportWrapper/Support';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @DrawerNavigator
 **/

const Drawer = createDrawerNavigator();

const DrawerNavigator: FC<IProps> = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerShown: false,
        }}>
        <Drawer.Screen name="Logo" component={Logo} />
        <Drawer.Screen name="Home" component={HomeWrapper} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Location" component={LocationWrapper} />
        <Drawer.Screen name="Support" component={SupportWrapper} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;

import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import colors from '@assets/styles/colors';
// import Login from '@screens/Login/Login';
import LoginWrapper from '@components/Wrappers/LoginWrapper/LoginWrapper';
import HomeWrapper from '@components/Wrappers/HomeWrapper/Home';
import LocationWrapper from '@components/Wrappers/LocationWrapper/Location';
import SupportWrapper from '@components/Wrappers/SupportWrapper/Support';
import CustomDrawer from '@components/CustomDrawer/CustomDrawer';
import Profile from '@screens/Profile/Profile';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @DrawerNavigator
 **/

const Drawer = createDrawerNavigator();

const DrawerNavigator: FC<IProps> = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeWrapper}
        options={{
          drawerIcon: ({color}) => (
            <EntypoIcon name="home" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginWrapper}
        options={{
          drawerIcon: ({color}) => (
            <AntIcon name="login" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Profile"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcon
              name="face-man-profile"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Locations"
        component={LocationWrapper}
        options={{
          drawerIcon: ({color}) => (
            <EvilIcon name="location" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Support"
        component={SupportWrapper}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcon name="support-agent" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

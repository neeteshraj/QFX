import React, {FC, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Logo from '@assets/images/logo.png';
import colors from '@assets/styles/colors';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @CustomDrawer
 **/

const CustomDrawer: FC<IProps> = (props: any) => {
  //   const [loggedIn, setLoggedIn] = useState(false);
  const [loggedIn] = useState(false);
  const signOut = () => {
    console.log('sign out');
  };
  const {container, logo, drawerItems, signout, signoutbutton, logoContainer} =
    styles;
  return (
    <SafeAreaView style={container}>
      <DrawerContentScrollView {...props}>
        {loggedIn ? (
          <View style={logoContainer}>
            <Text style={logo}>Nitesh Raj Khanal</Text>
          </View>
        ) : (
          <View style={logoContainer}>
            <Image source={Logo} style={logo} />
          </View>
        )}
        <View style={drawerItems}>
          <DrawerItemList {...props} />
        </View>
        {loggedIn ? (
          <View style={drawerItems}>
            <TouchableOpacity style={signout} onPress={signOut}>
              <Text style={signoutbutton}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhite,
    height: '100%',
  },
  logoContainer: {
    height: 150,
    backgroundColor: colors.darkGray,
  },
  logo: {
    height: 140,
    width: '100%',
  },
  drawerItems: {
    flex: 1,
    marginTop: 20,
  },
  signout: {
    paddingVertical: 10,
  },
  signoutbutton: {
    marginLeft: 20,
  },
});

export default CustomDrawer;

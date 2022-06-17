import React, {FC, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Logo from '@assets/images/headerLogo.png';
import colors from '@assets/styles/colors';

import AntIcon from 'react-native-vector-icons/AntDesign';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @CustomDrawer
 **/

const CustomDrawer: FC<IProps> = (props: any) => {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [loggedIn] = useState(false);

  const {
    container,
    logo,
    text,
    drawerItems,
    logoContainer,
    iconContainer,
    logout,
    logoutIcon,
    logoutText,
  } = styles;

  const logoutHandler = () => {
    setLoggedIn(false);
  };
  return (
    <View style={container}>
      <DrawerContentScrollView {...props}>
        {loggedIn ? (
          <View style={logoContainer}>
            <Text style={text}>Nitesh Raj Khanal</Text>
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
          <TouchableOpacity style={logout} onPress={logoutHandler}>
            <View style={iconContainer}>
              <AntIcon name="logout" size={22} style={logoutIcon} />
            </View>
            <Text style={logoutText}>Logout</Text>
          </TouchableOpacity>
        ) : null}
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    height: '100%',
  },
  logoContainer: {
    height: 100,
    backgroundColor: colors.darkGray,
  },
  logo: {
    marginTop: 5,
    height: 90,
    width: '100%',
  },
  text: {
    color: colors.primary,
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 37,
  },
  drawerItems: {
    flex: 1,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
  iconContainer: {
    backgroundColor: colors.offWhite,
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  logoutIcon: {
    color: colors.primary,
    textAlign: 'center',
    paddingTop: 8,
  },
  logoutText: {
    color: colors.primary,
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 'normal',
  },
});

export default CustomDrawer;

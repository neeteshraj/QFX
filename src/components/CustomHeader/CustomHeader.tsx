import React, {FC} from 'react';
import {View, SafeAreaView, Image, StyleSheet} from 'react-native';
import Logo from '@assets/images/logo.png';
import colors from '@assets/styles/colors';
import {Surface} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @CustomHeader
 **/

const CustomHeader: FC<IProps> = () => {
  const navigation = useNavigation();
  const {headerContainer, headerTopLeft, logoContainer, logo, headerTopRight} =
    styles;
  return (
    <SafeAreaView>
      <Surface style={headerContainer}>
        <View style={headerTopLeft}>
          {
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Feather name="menu" size={24} color={colors.iconColor} />
            </TouchableOpacity>
          }
        </View>
        <View style={logoContainer}>
          {<Image source={Logo} style={logo} />}
        </View>
        <View style={headerTopRight}>
          {
            <TouchableOpacity>
              <Icon name="location-pin" size={24} color={colors.iconColor} />
            </TouchableOpacity>
          }
        </View>
      </Surface>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 60,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
  },
  headerTopLeft: {
    flex: 1,
    margin: 10,
    marginLeft: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoContainer: {
    flex: 1,
    margin: 10,
    marginRight: 260,
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    width: 60,
    height: 30,
  },
  headerTopRight: {
    flex: 1,
    margin: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default CustomHeader;
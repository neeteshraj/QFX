import React, {FC} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import colors from '@assets/styles/colors';
import {Surface} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @ScreenHeader
 **/

/**
 * The ScreenHeader function is a React functional component that returns a SafeAreaView component that
 * contains a Surface component that contains a View component that contains a TouchableOpacity
 * component that contains an Ionicons component and a View component that contains a Text component
 * @returns A React component that is a functional component.
 */
const ScreenHeader: FC<IProps> = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {headerContainer, headerTopLeft, headerTitle, headerTitleText} = styles;

  return (
    <SafeAreaView>
      <Surface style={headerContainer}>
        <View style={headerTopLeft}>
          {
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color={colors.iconColor} />
            </TouchableOpacity>
          }
        </View>
        <View style={headerTitle}>
          {
            <Text style={headerTitleText}>
              {route.name === 'Home'
                ? 'Home'
                : route.name === 'Login'
                ? 'Login'
                : route.name === 'My Profile'
                ? 'Profile'
                : route.name === 'Selection'
                ? 'Show Selection'
                : null}
            </Text>
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
    width: '100%',
  },
  headerTopLeft: {
    marginLeft: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  headerTitleText: {
    fontSize: 20,
    color: colors.darkGray,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});

export default ScreenHeader;

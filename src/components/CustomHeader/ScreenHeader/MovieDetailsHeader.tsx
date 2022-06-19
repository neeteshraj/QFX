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

const MovieDetailsHeader: FC<IProps> = () => {
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
              {route.name === 'Home' ? 'Home' : route.params?.title}
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

export default MovieDetailsHeader;

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

const ScreenHeader: FC<IProps> = (props: any) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {headerContainer, headerTopLeft, headerTitle, headerTitleText} = styles;

  console.log(route.name);
  console.log('ScreenHeader', props);
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
          {<Text style={headerTitleText}>{route.name}</Text>}
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
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 80,
  },
  headerTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkGray,
  },
});

export default ScreenHeader;

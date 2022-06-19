import colors from '@assets/styles/colors';
import React, {FC} from 'react';
import {SafeAreaView, View, Image, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ThirdDay from '@components/SelectionComponent/ThirdDay';
import FirstDay from '@components/SelectionComponent/FirstDay';
import SecondDay from '@components/SelectionComponent/SecondDay';
import {dayGenerator} from '@utils/dayGenerator';

interface IProps {
  data: any;
  children: any;
}

/**
 * @author Nitesh Raj Khanal
 * @function @ShowSelection
 **/

const MaterialTab = createMaterialTopTabNavigator();

const ShowSelection: FC<IProps> = ({data}: any) => {
  const Day = dayGenerator();
  const {title, urlToImage} = data.data;
  const {container, imageContainer, imageStyle, movieTitle, movieTitleText} =
    styles;
  return (
    <SafeAreaView style={container}>
      <View style={imageContainer}>
        <Image source={{uri: urlToImage}} style={imageStyle} />
      </View>
      <View style={movieTitle}>
        <Text style={movieTitleText}>{title}</Text>
      </View>
      <MaterialTab.Navigator
        initialRouteName="Today"
        screenOptions={{
          tabBarLabelStyle: {fontWeight: 'bold'},
          tabBarStyle: {
            elevation: 0, //for android devices
            shadowOffset: {width: 0, height: 0}, //for ios devices
          },
        }}>
        <MaterialTab.Screen
          name="Today"
          children={() => <FirstDay propName={data} />}
        />
        <MaterialTab.Screen
          name="Tomorrow"
          children={() => <SecondDay propName={data} />}
        />
        <MaterialTab.Screen
          name={Day}
          children={() => <ThirdDay propName={data} />}
        />
      </MaterialTab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '20%',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: '100%',
    width: '30%',
  },
  movieTitle: {
    backgroundColor: colors.editButton,
    height: 40,
    justifyContent: 'center',
    marginTop: 5,
  },
  movieTitleText: {
    fontSize: 20,
    color: colors.primary,
    textAlign: 'center',
  },
});

export default ShowSelection;

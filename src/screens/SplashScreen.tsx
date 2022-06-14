import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '@assets/colors/Colors';

const SplashScreen = () => {
  //       const [showSplashScreen, setshowSplashScreen] = useState(true);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setshowSplashScreen(false);
  //     },4000)
  //   },[]);

  return (
    <View style={styles.mainContainer}>
      <Image source={{}} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

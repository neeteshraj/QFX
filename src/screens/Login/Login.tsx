import React, {FC, useState} from 'react';
import {View, SafeAreaView, StyleSheet, Alert, Image} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '@components/CustomButton/CustomButton';
import CustomInput from '@components/TextInput/TextInput';

import HeaderImage from '@assets/images/loginHeader.png';
import colors from '@assets/styles/colors';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Login
 **/

const Login: FC<IProps> = () => {
  const {
    container,
    imageContainer,
    headerImage,
    inputWrapper,
    iconContainer,
    icon,
  } = styles;
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  return (
    <SafeAreaView style={container}>
      <View style={imageContainer}>
        <Image source={HeaderImage} style={headerImage} />
      </View>
      <View style={inputWrapper}>
        <CustomInput
          label={'Email/Mobile Number'}
          icon={
            <View style={iconContainer}>
              <FeatherIcon
                name="at-sign"
                size={35}
                color={colors.primary}
                style={icon}
              />
            </View>
          }
          keyboardType={'email-address'}
          onChangeText={text => setData({...data, email: text})}
        />
        <CustomInput
          label={'Password'}
          secureTextEntry
          icon={
            <View style={iconContainer}>
              <Ionicons
                name="key-outline"
                size={40}
                color={colors.primary}
                style={icon}
              />
            </View>
          }
          onChangeText={text => setData({...data, password: text})}
          keyboardType={'default'}
        />
      </View>
      <CustomButton
        label={'LOGIN'}
        onPress={() => {
          Alert.alert('Login Successful');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkGray,
    height: '100%',
  },
  imageContainer: {
    marginBottom: 30,
    marginTop: -350,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  inputWrapper: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  iconContainer: {
    backgroundColor: colors.gray,
    borderWidth: 1,
    height: 55,
    width: 55,
    borderRadius: 50,
  },
  icon: {
    flex: 1,
    textAlign: 'center',
    marginTop: 9,
  },
});

export default Login;

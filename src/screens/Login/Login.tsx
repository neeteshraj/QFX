import React, {FC, useState, useContext} from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AuthContext} from '@components/Context/AuthContext';
import CustomButton from '@components/CustomButton/CustomButton';
import CustomInput from '@components/TextInput/TextInput';
import {HEIGHT} from '@utils/Dimensions';
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
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const {login} = useContext(AuthContext);
  return (
    <SafeAreaView style={container}>
      <Spinner visible={isLoading} />
      <View style={imageContainer}>
        <Image source={HeaderImage} style={headerImage} />
      </View>
      <View style={inputWrapper}>
        <CustomInput
          label={'Email/Mobile Number'}
          value={data.username}
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
          onChangeText={text => setData({...data, username: text})}
        />
        <CustomInput
          label={'Password'}
          secureTextEntry
          value={data.password}
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
          setTimeout(() => {
            setIsLoading(true);
            login(data);
          }, 1000);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.darkGray,
    height: '100%',
  },
  imageContainer: {
    marginTop: HEIGHT * 0.1,
    width: 100,
    height: 100,
    flexDirection: 'row',
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
    borderWidth: 0.5,
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

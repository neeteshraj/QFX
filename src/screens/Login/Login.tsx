import React, {FC} from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Login
 **/

const Login: FC<IProps> = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;

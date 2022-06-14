import React, {FC} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Cinemas
 **/

const Cinemas: FC<IProps> = () => {
  const {container} = styles;
  return (
    <SafeAreaView style={container}>
      <Text>Cinemas</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cinemas;

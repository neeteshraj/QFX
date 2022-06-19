import colors from '@assets/styles/colors';
import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @TermsAndConditions
 **/

const TermsAndConditions: FC<IProps> = () => {
  const {container, text} = styles;
  return (
    <View style={container}>
      <Text style={text}>TermsAndConditions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.primary,
  },
});

export default TermsAndConditions;

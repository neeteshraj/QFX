import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @ComingSoon
 **/

const ComingSoon: FC<IProps> = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>ComingSoon</Text>
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

export default ComingSoon;

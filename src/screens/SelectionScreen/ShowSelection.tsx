import colors from '@assets/styles/colors';
import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @ShowSelection
 **/

const ShowSelection: FC<IProps> = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text style={{color: colors.primary}}>ShowSelection</Text>
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

export default ShowSelection;

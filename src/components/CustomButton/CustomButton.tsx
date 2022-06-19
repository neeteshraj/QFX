import colors from '@assets/styles/colors';
import React, {FC} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface IProps {
  label: string;
  onPress: () => void;
}

/**
 * @author Nitesh Raj Khanal
 * @function @CustomButton
 **/

/**
 * Creating a function called CustomButton that takes in an object called props, which has a
 * label and an onPress property. Then returning a TouchableOpacity component that has a label
 * and an onPress property
 * @param {any}  - FC<IProps> - this is a generic type that takes an interface as a parameter.
 * @returns A TouchableOpacity component with a Text component inside of it.
 */
const CustomButton: FC<IProps> = ({label, onPress}: any) => {
  const {container, buttonText} = styles;
  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <Text style={buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buttonColor,
    width: '80%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 30,
  },
  buttonText: {
    color: colors.offWhite,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CustomButton;

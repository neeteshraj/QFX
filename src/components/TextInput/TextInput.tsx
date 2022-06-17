import React, {FC} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Login
 **/

const Textinput: FC<IProps> = ({
  label,
  icon,
  keyboardType,
  buttonPress,
  buttonLabel,
  ...props
}: any) => {
  const {container, inputField, buttonTextLabel} = styles;
  return (
    <View style={container}>
      {icon}
      <TextInput
        placeholder={label}
        keyboardType={keyboardType}
        style={inputField}
        {...props}
      />
      <TouchableOpacity onPress={buttonPress}>
        <Text style={buttonTextLabel}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {},
  buttonTextLabel: {},
});

export default Textinput;

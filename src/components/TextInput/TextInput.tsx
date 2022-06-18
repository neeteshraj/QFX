import colors from '@assets/styles/colors';
import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface IProps {
  label: string;
  value: string;
  icon: JSX.Element;
  keyboardType?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

/**
 * @author Nitesh Raj Khanal
 * @function @Login
 **/

const Textinput: FC<IProps> = ({
  label,
  icon,
  keyboardType,
  value,
  ...props
}: any) => {
  const {container, inputField, iconContainer, inputFieldContainer} = styles;
  return (
    <View style={container}>
      <View style={iconContainer}>{icon}</View>
      <View style={inputFieldContainer}>
        <TextInput
          placeholder={label}
          value={value}
          placeholderTextColor={colors.darkGray}
          keyboardType={keyboardType}
          style={inputField}
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 10,
    marginBottom: 25,
  },
  iconContainer: {
    zIndex: 1,
    position: 'absolute',
    top: '50%',
    left: '10%',
    transform: [{translateY: -25}, {translateX: -25}],
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputFieldContainer: {
    width: '85%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  inputField: {
    paddingLeft: 35,
    marginTop: 5,
    height: 40,
    backgroundColor: colors.gray,
    color: colors.primary,
  },
});

export default Textinput;

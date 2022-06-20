import colors from '@assets/styles/colors';
import React, {FC, useContext} from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '@components/Context/AuthContext';
interface IProps {
  propName: any;
}

/**
 * @author Nitesh Raj Khanal
 * @function @ThirdDay
 **/

const ThirdDay: FC<IProps> = ({propName}) => {
  const {
    container,
    movieInformation,
    cinemaInfo,
    cinemaName,
    city,
    seperator,
    showInformation,
    showTime,
    showHrs,
  } = styles;

  const {showDate} = propName.data;
  const {userInfo} = useContext(AuthContext);
  const navigation = useNavigation();
  let data = new Date(showDate);
  let hrs = data.getHours();
  let mins = data.getMinutes();
  if (hrs <= 9) {
    hrs = '0' + hrs;
  }
  if (mins < 10) {
    mins = '0' + mins;
  }
  const postTime = hrs + ':' + mins;

  const handleSelected = () => {
    userInfo
      ? Alert.alert('Feature coming soon')
      : navigation.navigate('Login', {});
  };

  return (
    <View style={container}>
      <View style={movieInformation}>
        <View style={cinemaInfo}>
          <Text style={cinemaName}>{propName.data.theatreName}</Text>
          <Text style={city}>{propName.data.city}</Text>
        </View>
        <View style={seperator} />
        <View style={showInformation}>
          <TouchableOpacity onPress={handleSelected}>
            <Text style={showTime}>{postTime}</Text>
            <Text style={showHrs}>HRS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.background,
  },
  movieInformation: {
    paddingTop: 10,
    flexDirection: 'row',
    backgroundColor: colors.offWhite,
    opacity: 0.7,
  },
  cinemaInfo: {
    flexDirection: 'column',
    marginLeft: 5,
  },
  cinemaName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: colors.primary,
  },
  city: {
    fontSize: 10,
    textAlign: 'center',
    color: colors.primary,
  },
  seperator: {
    height: 70,
    backgroundColor: '#000',
    width: 1,
    margin: 5,
    borderRadius: 50,
  },
  showInformation: {
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth: 1,
  },
  showTime: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.primary,
  },
  showHrs: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.primary,
  },
});

export default ThirdDay;

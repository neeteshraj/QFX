/* eslint-disable react-native/no-inline-styles */
import React, {FC, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import colors from '@assets/styles/colors';
import {AuthContext} from '@components/Context/AuthContext';

import QRCode from 'react-native-qrcode-svg';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Profile
 **/

const Profile: FC<IProps> = () => {
  const {
    parentContainer,
    header,
    headerText,
    userDetails,
    userDetailsText,
    qrContainer,
    qrCaption,
    editContainer,
    editButtonText,
  } = styles;
  const {userInfo} = useContext(AuthContext);
  const {name, email, mobile, location} = userInfo?.data;
  const qrData = {
    name,
    email,
    mobile,
    location,
  };
  const qrDataString = JSON.stringify(qrData);
  console.log(qrDataString);
  const handleEdit = () => {
    Alert.alert('Edit Profile Button Clicked');
  };
  return (
    <SafeAreaView style={parentContainer}>
      <View style={header}>
        <Text style={headerText}>MY PROFILE</Text>
      </View>
      <View style={userDetails}>
        <Text style={[userDetailsText, {fontWeight: '500', fontSize: 25}]}>
          {name}
        </Text>
        <Text style={[userDetailsText, {marginTop: 5}]}>{mobile}</Text>
        <Text style={[userDetailsText, {marginTop: 5}]}>{email}</Text>
        <Text style={[userDetailsText, {marginTop: 5}]}>{location}</Text>
      </View>
      <View style={qrContainer}>
        <QRCode
          value={qrDataString}
          size={200}
          color={colors.primary}
          backgroundColor={colors.darkGray}
        />
        <Text style={qrCaption}>
          Note: This QR Code contains only your QFX account identity.
        </Text>
      </View>
      <View style={editContainer}>
        <TouchableOpacity onPress={handleEdit}>
          <Text style={editButtonText}>EDIT PROFILE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  header: {
    width: '85%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.offWhite,
    marginTop: 15,
  },
  headerText: {
    fontSize: 22,
    color: colors.cinemasNameText,
  },
  userDetails: {
    width: '85%',
    marginTop: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDetailsText: {
    fontSize: 18,
    marginTop: 10,
    color: colors.primary,
  },
  qrContainer: {
    width: '85%',
    marginTop: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrCaption: {
    fontSize: 15,
    marginTop: 5,
    color: colors.primary,
    textAlign: 'center',
  },
  editContainer: {
    width: '85%',
    marginTop: 15,
    backgroundColor: colors.editButton,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 25,
    color: colors.offWhite,
  },
});

export default Profile;

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
    editContainer,
    editButtonText,
  } = styles;
  const {userInfo} = useContext(AuthContext);
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
          {userInfo?.data?.name}
        </Text>
        <Text style={userDetailsText}>{userInfo?.data?.mobile}</Text>
        <Text style={userDetailsText}>{userInfo?.data?.email}</Text>
        <Text style={userDetailsText}>{userInfo?.data?.location}</Text>
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

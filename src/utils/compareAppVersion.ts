import {Alert, Linking, Platform} from 'react-native';
// import RNExitApp from 'react-native-exit-app';
// import {BackHandler} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import axios from 'axios';
import RNBootSplash from 'react-native-bootsplash';

import {BaseUrl} from '@constants/baseUrl';
import pkg from '../../package.json';

const appVersion = pkg.version;

const platform = Platform.OS;

const compareAppVersion = async () => {
  const apiAppVersionUrl = `${BaseUrl}api/public/AppVersion?platform=${platform}`;
  const details = await axios.get(apiAppVersionUrl);
  const apiAppVersion = details.data.data.version;

  /* Checking if the app is running on iOS or not. */
  if (platform === 'ios') {
    DeviceInfo.isEmulator().then(isEmulator => {
      /* Checking if the app is running on emulator or not. */
      if (isEmulator) {
        if (apiAppVersion !== appVersion) {
          Alert.alert(
            'Update Available',
            `Your app version is ${appVersion}. New version ${apiAppVersion} is available. Please update to the latest version.`,
            [
              {
                text: 'Cancel',
                // onPress: () => RNExitApp.exitApp(), // exit app
                onPress: () => {
                  console.log('Cancel Pressed');
                },
                style: 'cancel',
              },
              {
                text: 'Update',
                onPress: () =>
                  Linking.openURL(
                    'https://apps.apple.com/np/app/qfx-cinema/id1092931043',
                  ),
              },
            ],
            {cancelable: false},
          );
        }
      }
      if (!isEmulator) {
        if (apiAppVersion !== appVersion) {
          Alert.alert(
            'Update Available',
            `Your app version is ${appVersion}. New version ${apiAppVersion} is available. Please update to the latest version.`,
            [
              {
                text: 'Cancel',
                // onPress: () => RNExitApp.exitApp(), // exit app
                onPress: () => {
                  console.log('Cancel Pressed');
                },
                style: 'cancel',
              },
              {
                text: 'Update',
                onPress: () =>
                  Linking.openURL(
                    'https://apps.apple.com/np/app/qfx-cinema/id1092931043',
                  ),
              },
            ],
            {cancelable: false},
          );
        }
      }
    });
  } else {
    /* Checking if the app is running on Android or not. */
    DeviceInfo.isEmulator().then(isEmulator => {
      /* Checking if the app is running on emulator or not. */
      if (isEmulator) {
        if (apiAppVersion !== appVersion) {
          Alert.alert(
            'Update Available',
            `Your app version is ${appVersion}. New version ${apiAppVersion} is available. Please update to the latest version.`,
            [
              {
                text: 'Cancel',
                //onPress: () => BackHandler.exitApp(), // exit app
                onPress: () => {
                  console.log('Cancel Pressed');
                },
                style: 'cancel',
              },
              {
                text: 'Update',
                onPress: () =>
                  Linking.openURL(
                    'https://play.google.com/store/search?q=qfx&c=apps&hl=en&gl=US',
                  ),
              },
            ],
            {cancelable: false},
          );
        }
      }
      if (!isEmulator) {
        if (apiAppVersion !== appVersion) {
          Alert.alert(
            'Update Available',
            `Your app version is ${appVersion}. New version ${apiAppVersion} is available. Please update to the latest version.`,
            [
              {
                text: 'Cancel',
                //onPress: () => BackHandler.exitApp(), // exit app
                onPress: () => {
                  console.log('Cancel Pressed');
                },
                style: 'cancel',
              },
              {
                text: 'Update',
                onPress: () =>
                  Linking.openURL(
                    'market://details?id=com.exolutus.qfxcinemas',
                  ),
              },
            ],
            {cancelable: false},
          );
        }
      }
    });
  }
  RNBootSplash.hide({fade: true});
};

export default compareAppVersion;

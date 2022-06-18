import React, {useState, createContext, useEffect} from 'react';
import {BaseUrl} from '@constants/baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'react-native-crypto-js';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState(null);
  const [access_token, setAccess_token] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const loginUrl = `${BaseUrl}connect/token`;

  /* This is a useEffect hook that is called when the component is mounted. It is used to get the
  access token from the AsyncStorage and set it to the state. */
  useEffect(() => {
    AsyncStorage.getItem('AccessToken')
      .then(token => {
        if (token) {
          let decryptedToken = CryptoJS.AES.decrypt(token, 'secret key 123');
          let originalText = decryptedToken.toString(CryptoJS.enc.Utf8);
          setAccess_token(JSON.parse(originalText).tokens);
        }
      })
      .catch(error => console.error('Load Error =>', error));
  }, []);

  /* This is a useEffect hook that is called when the component is mounted. It is used to get the
    access token from the AsyncStorage and set it to the state. */
  useEffect(() => {
    if (access_token) {
      try {
        fetch(`${BaseUrl}api/account/userinfo`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
          .then(res => res.json())
          .then(data => {
            setUserInfo(data);
          })
          .catch(err => {
            console.log('Catch Error =>', err);
          });
      } catch (error) {
        console.log('Fetch error: ', error);
      }
    }
  }, [access_token]);

  /**
   * It takes in a username and password, and then uses the fetch API to make a POST request to the
   * loginUrl. The response is then parsed into JSON and the access_token is extracted. The
   * access_token is then encrypted using the CryptoJS library and stored in the AsyncStorage
   */
  const login = async logindata => {
    const {username, password} = logindata;
    setIsLoading(true);
    const bodyFormData = new FormData();
    bodyFormData.append('username', username);
    bodyFormData.append('password', password);
    bodyFormData.append('grant_type', 'password');
    bodyFormData.append('client_id', 'self');

    try {
      const res = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: bodyFormData,
      });
      const data = await res.json();

      const access_token_data = data.access_token;
      let encryptedText = CryptoJS.AES.encrypt(
        JSON.stringify({tokens: access_token_data}),
        'secret key 123',
      ).toString();

      await AsyncStorage.setItem('AccessToken', encryptedText);
      setAccess_token(access_token_data);
    } catch (error) {
      console.log('Error while setting token =>', error);
    }
  };
  console.log('USER INFO =>', userInfo);
  return (
    <AuthContext.Provider
      value={{isLoading, userInfo, login, setAccess_token, setUserInfo}}>
      {children}
    </AuthContext.Provider>
  );
};

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
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{isLoading, userInfo, login, setAccess_token, setUserInfo}}>
      {children}
    </AuthContext.Provider>
  );
};

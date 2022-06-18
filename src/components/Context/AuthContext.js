import axios from 'axios';
import React, {useState, createContext} from 'react';
import {BaseUrl} from '@constants/baseUrl';
import {useAsyncStorage as AsyncStorage} from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const loginUrl = `${BaseUrl}connect/token`;
  console.log('loginUrl', loginUrl);
  const login = (username, password, grant_type, client_id) => {
    console.log('Login =>', username, password, grant_type, client_id);
    setIsLoading(true);
    axios
      .post(`${loginUrl}`, {
        grant_type: 'password',
        client: 'self',
        username,
        password,
      })
      .then(res => {
        let userInformation = res.data;
        // console.log('UserInformation =>', userInformation);
        setUserInfo(userInformation);
        AsyncStorage.setItem(
          'userInformation =>',
          JSON.stringify(userInformation),
        );
        setIsLoading(false);
      })
      .catch(err => {
        console.log('Login Error =>', err);
      });
    console.log('login', username, password);
  };

  return (
    <AuthContext.Provider value={{isLoading, userInfo, login}}>
      {children}
    </AuthContext.Provider>
  );
};

import {
  REQUEST_APP_VERSION,
  RECEIVE_APP_VERSION,
  RECEIVE_APP_VERSION_SUCCESS,
} from '@redux/types/appVersionTypes';

export const requestAppVersion = () => ({
  type: REQUEST_APP_VERSION,
});

export const receiveAppVersion = (payload: any) => ({
  type: RECEIVE_APP_VERSION,
  payload,
});

export const receiveAppVersionSuccess = (payload: any) => ({
  type: RECEIVE_APP_VERSION_SUCCESS,
  payload,
});

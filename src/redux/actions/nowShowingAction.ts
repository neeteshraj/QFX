import {
  RECEIVE_NOWSHOWING,
  REQUEST_NOWSHOWING,
  RECEIVE_NOWSHOWING_SUCCESS,
} from '../types/nowShowingTypes';

export const requestNowShowing = () => ({
  type: REQUEST_NOWSHOWING,
});

export const receiveNowShowing = (payload: any) => ({
  type: RECEIVE_NOWSHOWING,
  payload,
});

export const receiveNowShowingSuccess = (payload: any) => ({
  type: RECEIVE_NOWSHOWING_SUCCESS,
  payload,
});

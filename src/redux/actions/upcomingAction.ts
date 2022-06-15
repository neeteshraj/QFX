import {
  REQUEST_UPCOMING,
  RECEIVE_UPCOMING,
  RECEIVE_UPCOMING_SUCCESS,
} from '../types/upcomingTypes';

export const requestUpcoming = () => ({
  type: REQUEST_UPCOMING,
});
export const receiveUpcoming = (payload: any) => ({
  type: RECEIVE_UPCOMING,
  payload,
});
export const receiveUpcomingSuccess = (payload: any) => ({
  type: RECEIVE_UPCOMING_SUCCESS,
  payload,
});

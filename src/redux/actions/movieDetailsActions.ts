import {
  REQUEST_MOVIE_DETAILS,
  RECEIVE_MOVIE_DETAILS,
  RECEIVE_MOVIE_DETAILS_SUCCESS,
} from '../types/movieDetailTypes';

export const requestMovieDetails = () => ({
  type: REQUEST_MOVIE_DETAILS,
});
export const receiveMovieDetails = (payload: any) => ({
  type: RECEIVE_MOVIE_DETAILS,
  payload,
});
export const receiveMovieDetailsSuccess = (payload: any) => ({
  type: RECEIVE_MOVIE_DETAILS_SUCCESS,
  payload,
});

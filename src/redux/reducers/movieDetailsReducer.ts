import {
  REQUEST_MOVIE_DETAILS,
  RECEIVE_MOVIE_DETAILS,
  RECEIVE_MOVIE_DETAILS_SUCCESS,
} from '../types/movieDetailTypes';

export const initialState = {
  isFetching: false,
  movie: [],
};

const MovieDetailsReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case REQUEST_MOVIE_DETAILS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.payload,
      };
    case RECEIVE_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default MovieDetailsReducer;

import {
  REQUEST_UPCOMING,
  RECEIVE_UPCOMING,
  RECEIVE_UPCOMING_SUCCESS,
} from '../types/upcomingTypes';

const initialState = {
  isFetching: false,
  upcoming: [],
};

const upcomingReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case REQUEST_UPCOMING:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_UPCOMING:
      return {
        ...state,
        isFetching: false,
        upcoming: action.payload,
      };
    case RECEIVE_UPCOMING_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default upcomingReducer;

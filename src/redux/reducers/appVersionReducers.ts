import {
  REQUEST_APP_VERSION,
  RECEIVE_APP_VERSION,
  RECEIVE_APP_VERSION_SUCCESS,
} from '@redux/types/appVersionTypes';

export const initialState = {
  isFetching: false,
  version: [],
};

const versionReducers = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case REQUEST_APP_VERSION:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_APP_VERSION:
      return {
        ...state,
        version: action.payload,
      };
    case RECEIVE_APP_VERSION_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default versionReducers;

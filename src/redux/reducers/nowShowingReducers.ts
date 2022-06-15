import {
  RECEIVE_NOWSHOWING,
  REQUEST_NOWSHOWING,
  RECEIVE_NOWSHOWING_SUCCESS,
} from '../types/nowShowingTypes';

export const initialState = {
  isFetching: false,
  nowShowing: [],
};

const nowShowingReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case REQUEST_NOWSHOWING:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_NOWSHOWING:
      return {
        ...state,
        isFetching: false,
        nowShowing: action.payload,
      };
    case RECEIVE_NOWSHOWING_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default nowShowingReducer;

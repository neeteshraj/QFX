import {
  RECEIVE_SELECTION,
  RECEIVE_SELECTION_SUCCESS,
  REQUEST_SELECTION,
} from '@redux/types/selectiontypes';

const initialState = {
  isFetching: false,
  selection: [],
};
const selectionReducers = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case REQUEST_SELECTION:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_SELECTION:
      return {
        ...state,
        selection: action.payload,
      };
    case RECEIVE_SELECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default selectionReducers;

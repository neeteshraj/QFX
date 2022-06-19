import {
  RECEIVE_SELECTION,
  REQUEST_SELECTION,
  RECEIVE_SELECTION_SUCCESS,
} from '@redux/types/selectiontypes';

export const requestSelection = () => ({
  type: REQUEST_SELECTION,
});

export const receiveSelection = (payload: any) => ({
  type: RECEIVE_SELECTION,
  payload,
});

export const receiveSelectionSuccess = (payload: any) => ({
  type: RECEIVE_SELECTION_SUCCESS,
  payload,
});

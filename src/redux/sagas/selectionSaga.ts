import {call, put, takeEvery} from 'redux-saga/effects';
import {
  REQUEST_SELECTION,
  RECEIVE_SELECTION,
} from '@redux/types/selectiontypes';
import {GET} from '@services/movieData';

const fetchSelections = async () => {
  const response = await GET('api/public/ShowInformation');
  return response.data.data;
};

function* workSelectionFetch(): any {
  try {
    const selections = yield call(fetchSelections);
    yield put({type: RECEIVE_SELECTION, payload: selections});
  } catch (error) {
    console.log('Error=>', error);
  }
}

function* selectionSaga(): any {
  yield takeEvery(REQUEST_SELECTION, workSelectionFetch);
}

export default selectionSaga;

import {call, put, takeEvery} from 'redux-saga/effects';
import {RECEIVE_NOWSHOWING, REQUEST_NOWSHOWING} from '../types/nowShowingTypes';
import {GET} from '@services/movieData';

const fetchNowShowing = async () => {
  const response = await GET('api/public/NowShowing');
  return response.data.data;
};

function* workMoviesFetch(): any {
  try {
    const nowShowing = yield call(fetchNowShowing);
    yield put({type: RECEIVE_NOWSHOWING, payload: nowShowing});
  } catch (error) {
    console.log('Error=>', error);
  }
}

function* nowShowingSaga(): any {
  yield takeEvery(REQUEST_NOWSHOWING, workMoviesFetch);
}
export default nowShowingSaga;

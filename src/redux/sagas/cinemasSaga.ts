import {call, put, takeEvery} from 'redux-saga/effects';
import {REQUEST_CINEMAS, RECEIVE_CINEMAS} from '../types/cinemaTypes';
import {GET} from '@services/movieData';

const fetchCinemas = async () => {
  const response = await GET('api/public/Cinemas');
  return response.data.data;
};

function* workCinemasFetch(): any {
  try {
    const cinemas = yield call(fetchCinemas);
    yield put({type: RECEIVE_CINEMAS, payload: cinemas});
  } catch (error) {
    console.log('Error =>', error);
  }
}

function* cinemasSaga(): any {
  yield takeEvery(REQUEST_CINEMAS, workCinemasFetch);
}

export default cinemasSaga;

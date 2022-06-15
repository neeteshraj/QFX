import {call, put, takeEvery} from 'redux-saga/effects';
import {REQUEST_CINEMAS, RECEIVE_CINEMAS} from '../types/cinemaTypes';
import {GET} from '../../services/movieData';

const fetchMovies = async () => {
  const response = await GET('api/public/cinemas');
  return response.data.data;
};

function* workMoviesFetch(): any {
  try {
    const movies = yield call(fetchMovies);
    yield put({type: RECEIVE_CINEMAS, payload: movies});
  } catch (error) {
    console.log('Error:=>', error);
  }
}

function* moviesSaga(): any {
  yield takeEvery(REQUEST_CINEMAS, workMoviesFetch);
}

export default moviesSaga;

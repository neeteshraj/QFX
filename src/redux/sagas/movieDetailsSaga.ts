import {call, put, takeEvery} from 'redux-saga/effects';
import {
  REQUEST_MOVIE_DETAILS,
  RECEIVE_MOVIE_DETAILS,
} from '../types/movieDetailTypes';
import {GET} from '@services/movieData';

const fetchMovieDetails = async () => {
  const response = await GET('api/public/Event');
  return response.data.data;
};

function* workMovieDetailsFetch(): any {
  try {
    const movieDetails = yield call(fetchMovieDetails);
    yield put({type: RECEIVE_MOVIE_DETAILS, payload: movieDetails});
  } catch (error) {
    console.log('Error=>', error);
  }
}

function* movieDetailsSaga(): any {
  yield takeEvery(REQUEST_MOVIE_DETAILS, workMovieDetailsFetch);
}

export default movieDetailsSaga;

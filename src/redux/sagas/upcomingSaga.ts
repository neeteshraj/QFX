import {call, put, takeEvery} from 'redux-saga/effects';
import {REQUEST_UPCOMING, RECEIVE_UPCOMING} from '../types/upcomingTypes';
import {GET} from '@services/movieData';

const fetchUpcoming = async () => {
  const response = await GET('api/public/ComingSoon');
  return response.data.data;
};

function* workUpcomingFetch(): any {
  try {
    const upcoming = yield call(fetchUpcoming);
    yield put({type: RECEIVE_UPCOMING, payload: upcoming});
  } catch (error) {
    console.log('Error=>', error);
  }
}

function* upcomingSaga(): any {
  yield takeEvery(REQUEST_UPCOMING, workUpcomingFetch);
}

export default upcomingSaga;

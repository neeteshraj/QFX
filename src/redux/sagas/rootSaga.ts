import {all} from 'redux-saga/effects';
import nowShowing from './nowShowingSaga';
import upcoming from './upcomingSaga';
import cinemas from './cinemasSaga';
import movieDetails from './movieDetailsSaga';

function* rootSaga() {
  yield all([nowShowing(), upcoming(), cinemas(), movieDetails()]);
}

export default rootSaga;

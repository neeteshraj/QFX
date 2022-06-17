import {all} from 'redux-saga/effects';
import nowShowing from './nowShowingSaga';
import upcoming from './upcomingSaga';
import cinemas from './cinemasSaga';
import movieDetails from './movieDetailsSaga';
import appVersion from './appVersionSaga';

function* rootSaga() {
  yield all([
    nowShowing(),
    upcoming(),
    cinemas(),
    movieDetails(),
    appVersion(),
  ]);
}

export default rootSaga;

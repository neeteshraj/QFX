import {all} from 'redux-saga/effects';
import nowShowing from './nowShowingSaga';
import upcoming from './upcomingSaga';
import cinemas from './cinemasSaga';

function* rootSaga() {
  yield all([nowShowing(), upcoming(), cinemas()]);
}

export default rootSaga;

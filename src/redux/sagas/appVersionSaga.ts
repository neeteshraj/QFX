import {call, put, takeEvery} from 'redux-saga/effects';
import {
  REQUEST_APP_VERSION,
  RECEIVE_APP_VERSION,
} from '@redux/types/appVersionTypes';
import {GET} from '@services/movieData';

const fetchApiVersion = async () => {
  const response = await GET('api/public/AppVersion');
  return response.data.data;
};

function* workAppVersionFetch(): any {
  try {
    const version = yield call(fetchApiVersion);
    yield put({type: RECEIVE_APP_VERSION, payload: version});
  } catch (error) {
    console.log('Error =>', error);
  }
}

function* appVersionSaga(): any {
  yield takeEvery(REQUEST_APP_VERSION, workAppVersionFetch);
}

export default appVersionSaga;

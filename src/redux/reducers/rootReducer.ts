import {combineReducers} from 'redux';
import nowShowingReducer from './nowShowingReducers';
import upcomingReducer from './upcomingReducer';
import cinemaReducers from './cinemaReducers';
import movieDetails from './movieDetailsReducer';
import appVersion from './appVersionReducers';

export default combineReducers({
  nowShowing: nowShowingReducer,
  upcoming: upcomingReducer,
  cinema: cinemaReducers,
  movieDetails: movieDetails,
  appVersion: appVersion,
});

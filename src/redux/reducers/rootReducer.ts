import {combineReducers} from 'redux';
import nowShowingReducer from './nowShowingReducers';
import upcomingReducer from './upcomingReducer';
import cinemaReducers from './cinemaReducers';

export default combineReducers({
  nowShowing: nowShowingReducer,
  upcoming: upcomingReducer,
  cinema: cinemaReducers,
});

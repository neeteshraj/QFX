import {combineReducers} from 'redux';
import nowShowingReducer from './nowShowingReducers';
import upcomingReducer from './upcomingReducer';
import cinemaReducers from './cinemaReducers';
import movieDetails from './movieDetailsReducer';

export default combineReducers({
  nowShowing: nowShowingReducer,
  upcoming: upcomingReducer,
  cinema: cinemaReducers,
  movieDetails: movieDetails,
});

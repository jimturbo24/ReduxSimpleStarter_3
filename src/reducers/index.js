import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
  // console.log(weather)
});

export default rootReducer;

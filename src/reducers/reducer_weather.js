import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){

  switch(action.type) {
    case FETCH_WEATHER: {
      console.log('test 2');
      return [action.payload.data, ...state];
    }
  }
  return state;
}

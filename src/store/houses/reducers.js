import { combineReducers } from 'redux';
import { STORE_HOUSES } from './actions';

const records = (state = [], action) => {
  switch(action.type) {
    case STORE_HOUSES:
      return action.records;
    default:
      return state;
  }
};

export default combineReducers({
  records,
});
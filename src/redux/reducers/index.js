import {combineReducers} from 'redux';
import filter from './filters';
import pizza from './pizza'
import cart from './cart';

const rootReducer = combineReducers({
  filter,
  pizza,
  cart
});

export default rootReducer;
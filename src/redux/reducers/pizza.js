import {
  SET_PIZZAS,
  SET_LOADING
} from '../types';

const initilaState = {
  items: [],
  isLoading: true
};

const pizza = (state = initilaState, action) => {
  switch(action.type){
    case SET_PIZZAS: return {
      ...state,
      isLoading: false,
      items: action.payload
    };
    case SET_LOADING: 
      return {
        ...state,
        isLoading: action.payload
      };
    default: return state;
  }
}

export default pizza;
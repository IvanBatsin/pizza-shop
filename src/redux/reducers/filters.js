import {
  SET_SORT_BY,
  SET_CATEGORY
} from '../types';

const initialState = {
  sortBy: {
    type: 'popular',
    order: 'desc'
  },
  category: null
};

const filters = (state=initialState, action) => {
  switch(action.type){
    case SET_SORT_BY: 
      return {
        ...state,
        sortBy: {
          type: action.payload.type,
          order: action.payload.order
        }
      };
    case SET_CATEGORY: {
      return {
        ...state,
        category: action.payload
      }
    }
    default: return state;
  }
}
export default filters;
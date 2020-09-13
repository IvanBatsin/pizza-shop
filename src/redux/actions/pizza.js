import {
  SET_PIZZAS,
  SET_LOADING
} from '../types';
import axios from 'axios';

export const setLoaded = payload => ({
  type: SET_LOADING,
  payload
});

export const setPizzas = items => ({
  type: SET_PIZZAS,
  payload: items
});

export const fecthPizzas = (sortBy, category) => {
  return async dispatch => {
    dispatch(setLoaded(true));

    const res = await axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`);

    const data = res.data;
    dispatch(setPizzas(data));
  }
}
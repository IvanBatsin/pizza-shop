import {
  SET_SORT_BY,
  SET_CATEGORY
} from '../types';

export const setSortBy = obj => ({
  type: SET_SORT_BY,
  payload: obj
});

export const setCategory = categoryIndex => ({
  type: SET_CATEGORY,
  payload: categoryIndex
});
import {
  ADD_PIZZA_TO_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  MINUS_ONE_ITEM,
  PLUS_ONE_ITEM
} from '../types'

export const addPizzaToCart = pizzaObject => ({
  type: ADD_PIZZA_TO_CART,
  payload: pizzaObject
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const removeCartItem = id => ({
  type: REMOVE_CART_ITEM,
  payload: id
});

export const plusOneItem = id => ({
  type: PLUS_ONE_ITEM,
  payload: id
});

export const minusOneItem = id => ({
  type: MINUS_ONE_ITEM,
  payload: id
});
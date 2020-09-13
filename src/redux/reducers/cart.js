import {ADD_PIZZA_TO_CART, CLEAR_CART, REMOVE_CART_ITEM, PLUS_ONE_ITEM, MINUS_ONE_ITEM} from '../types';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
};

const getArrayObjectsPrice = arr => arr.reduce((accum, item) => accum += item.price, 0);
const reduceItemsObjValueFromProps = (obj, prop) => {
  return Object.keys(obj).reduce((accum, key) => accum += obj[key][prop], 0)
}

const cartReducer = (state = initialState, action) => {
  switch(action.type){

    case ADD_PIZZA_TO_CART: {
      const currentPizzaItems = !state.items[action.payload.id] 
          ? [action.payload] 
          : [...state.items[action.payload.id].items, action.payload];

      const obj = { 
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getArrayObjectsPrice(currentPizzaItems),
          totalCount: currentPizzaItems.length
        }
      };

      const totalCount = Object.keys(obj).reduce((accum, key) => accum += obj[key].items.length, 0);
      const totalPrice = Object.keys(obj).reduce((accum, key) => accum += obj[key].totalPrice, 0);

      return {
        ...state,
        items: obj,
        totalCount,
        totalPrice
      }
    };

    case CLEAR_CART: 
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0
      };

    case REMOVE_CART_ITEM: 
      const removedItems = {
        ...state.items
      };

      const currentTotalPrice = state.items[action.payload].totalPrice;
      const currentTotalCount = state.items[action.payload].items.length;

      delete removedItems[action.payload];
      return {
        ...state,
        items: removedItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount
      };

    case PLUS_ONE_ITEM: {
      const newItemsArray = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ];

      const newItemsObj = {
        ...state.items,
        [action.payload]: {
          items: newItemsArray,
          totalPrice: getArrayObjectsPrice(newItemsArray),
          totalCount: newItemsArray.length
        }
      }

      return {
        ...state,
        items: newItemsObj,
        totalPrice: reduceItemsObjValueFromProps(newItemsObj, 'totalPrice'),
        totalCount: reduceItemsObjValueFromProps(newItemsObj, 'totalCount')
      };
    }

    case MINUS_ONE_ITEM: {
      const currentItems = [...state.items[action.payload].items];
      const newItem = [...state.items[action.payload].items].length > 1 ? [...state.items[action.payload].items].slice(1) : currentItems;

      const newItemsObj = {
        ...state.items,
          [action.payload]: {
            items: newItem,
            totalPrice: getArrayObjectsPrice(newItem),
            totalCount: newItem.length
          }
      }

      return {
        ...state,
        items: newItemsObj,
        totalCount: reduceItemsObjValueFromProps(newItemsObj, 'totalCount'),
        totalPrice: reduceItemsObjValueFromProps(newItemsObj, 'totalPrice')
      };
    }
    default: return state;
  }
}

export default cartReducer;
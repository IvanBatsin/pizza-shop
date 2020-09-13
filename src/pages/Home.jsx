import React, {useCallback} from 'react';

// Render component
import {Categories, SortPopup, PizzaBlock} from '../components/index';
import PizzaLoader from '../UI/PizzaBlockLoader';
import ErrorBoundary from '../errorHandler/ErrorBoundary';

// React redux hooks
import {useSelector, useDispatch} from 'react-redux';

// Action creators
import {setCategory, setSortBy} from '../redux/actions/filters';
import {fecthPizzas} from '../redux/actions/pizza';
import {addPizzaToCart} from '../redux/actions/cart';


const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  {name: 'популярность', type: 'popular', order: 'desc'}, 
  {name: 'цена', type: 'price', order: 'desc'}, 
  {name: 'алфавит', type: 'name', order: 'asc'}
];

export default function Home(){
  const dispatch = useDispatch();

  const {pizzas, isLoading, filter, cartItems} = useSelector(({pizza, filter, cart}) => {
    return {
      pizzas: pizza.items,
      isLoading: pizza.isLoading,
      cartItems: cart.items,
      filter,
    }
  });

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onChangeSortType = useCallback(obj => {
    dispatch(setSortBy(obj));
    dispatch(fecthPizzas(filter.sortBy, filter.category));
  }, []);

  React.useEffect(() => {
      dispatch(fecthPizzas(filter.sortBy, filter.category));
  }, [filter.category, filter.sortBy]);

  const addNewPizzaToCart = useCallback(pizza => {
    dispatch(addPizzaToCart(pizza));
  }, []);
  
  return (
    <div className="container">
      <div className="content__top">
        <ErrorBoundary>
          <Categories 
            getCategoryIndex={onSelectCategory}
            items={categoriesNames}
            activeCategory={filter.category}/>
          <SortPopup changeSortBy={onChangeSortType} activeSort={filter.sortBy} items={sortItems}></SortPopup>
        </ErrorBoundary>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <ErrorBoundary>
        <div className="content__items">
          {(pizzas && pizzas.length && !isLoading) ? 
            pizzas.map(item => {
              return (
                <PizzaBlock 
                  addPizza={addNewPizzaToCart} 
                  key={item.id} 
                  item={item} 
                  isLoading={isLoading}
                  itemsInCart={cartItems[item.id] ? cartItems[item.id].items.length : 0}>
                </PizzaBlock>
              )
            })
          : Array(10).fill(<PizzaLoader/>).map((_, index) => <PizzaLoader key={index}></PizzaLoader>)}
        </div>
      </ErrorBoundary>
    </div>
  );
}
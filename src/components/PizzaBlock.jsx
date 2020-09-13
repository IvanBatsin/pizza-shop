import React, { useState } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../UI/button';

export default function PizzaBlock({item: pizzaObj, addPizza, itemsInCart}){
  const typesNames = ['тонкое', 'традиционное'];
  const [activeType, setActiveType] = useState(pizzaObj.types[0]);

  const availableSize = [26, 30, 40];
  const [activeSize, setActiveSize] = useState(pizzaObj.sizes[0]);

  const onSelectType = index => {
    setActiveType(index);
  }

  const onSelectSize = index => setActiveSize(availableSize[index]);

  const onAddPizza = () => {
    const obj = {
      id: pizzaObj.id,
      name: pizzaObj.name,
      imageUrl: pizzaObj.imageUrl,
      price: pizzaObj.price,
      size: activeSize,
      type: typesNames[activeType]
    };
    addPizza(obj);
  }
  
  return (
    <div className="pizza-block">
      <img
      className="pizza-block__image"
      src={pizzaObj.imageUrl}
      alt="Pizza"
      />
      <h4 className="pizza-block__title">{pizzaObj.name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typesNames.map((type, index) => {
            return <li 
                onClick={() => onSelectType(index)}  
                key={`${type}_${index}`}
                className={ClassNames({
                  active: activeType === index,
                  disabled: !pizzaObj.types.includes(index)
                })}
              >{type}</li>
          })}
        </ul>
        <ul>
          {availableSize.map((item, index) => {
            return <li 
                key={`${item}_${index}`}
                onClick={() => onSelectSize(index)}
                className={ClassNames({
                  active: activeSize === item,
                  disabled: !pizzaObj.sizes.includes(item)
                })}
              >{item} см.</li>
          })}
        </ul>
      </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {pizzaObj.price} ₽</div>
          <Button className="button--add" outline>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span onClick={onAddPizza}>Добавить</span>
            <i>{itemsInCart}</i>
          </Button>
        </div>
      </div> 
  );
}

PizzaBlock.propTypes = {
  pizzaObj: PropTypes.object.isRequired,
  addPizza: PropTypes.func.isRequired,
  itemsInCart: PropTypes.number.isRequired
}

PizzaBlock.defaultProps = {
  pizzaObj: {},
  itemsInCart: 0
}
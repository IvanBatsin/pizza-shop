import React from 'react';
import {Link} from 'react-router-dom';
import cartEmptyImage from '../assets/img/empty-cart.png';

export default function CartEmpty(){
  return (
    <div className="cart cart--empty">
      <h2>Корзина пустая</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.<br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cartEmptyImage} alt="Empty cart" />
      <Link className="button button--black" to="/">
      <span>Вернуться назад</span>
      </Link>
    </div>
  )
}
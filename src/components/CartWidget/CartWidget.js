import React from 'react';
import cart from '../../assets/icons/cart.svg';
import './CartWidget.css'
import {CartContext} from '../contexts/CartContext';

const CartWidget = () => {

  const context = React.useContext(CartContext);
  const {totalQuantity} = context;

  return (
      <>
        <img src={cart} alt="" className="cart"/>
        {totalQuantity() > 0 && <span className="cart-quantity">{totalQuantity()}</span>}
      </>
  )
}

export default CartWidget;
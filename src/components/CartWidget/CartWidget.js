import React from 'react';
import cart from '../../assets/icons/cart.svg';
import './CartWidget.css'

const CartWidget = () => {

  return (
      <>
        <img src={cart} alt="" className="cart"/>
        <span className="counter">5</span>
      </>
  )
}

export default CartWidget;
import React from "react";
import cart from '../../assets/icons/cart.svg';
import './CartWidget.css'

function CartWidget() {
    return (
        <>
            <a href="#">
                <img src={cart} alt="" className="cart"/>
                <span className="counter">5</span>
            </a>
        </>
    )
}

export default CartWidget;
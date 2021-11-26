import './ItemCount.css'
import React from 'react';

const ItemCount = (props) => {

  const [quantity, setQuantity] = React.useState(0);

  const add = () => {
    if (quantity < props.stock) {
      setQuantity(quantity + 1)
    }
  }

  const subtract = () => {
    if (quantity > props.initial) {
      setQuantity(quantity - 1)
    }
  }

  return (
      <>
        <button onClick={subtract}>-</button>
        <input type="text" placeholder={props.initial} value={quantity} readOnly/>
        <button onClick={add}>+</button>
        {quantity > 0 && <button className="addToCart" onClick={() => props.onAdd(quantity)}>Añadir al carro</button>}
      </>
  )
}

export default ItemCount
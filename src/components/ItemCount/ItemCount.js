import './ItemCount.css'
import React from 'react';

const ItemCount = (props) => {

  const [quantity, setQuantity] = React.useState(0);
  const [added, setAdded] = React.useState(false);

  const add = () => {
    setAdded(false);

    if (quantity < props.stock) {
      setQuantity(quantity + 1)
    }
  }

  const subtract = () => {
    setAdded(false);

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
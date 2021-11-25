import './ItemCount.css'
import React from 'react';
import {Link} from 'react-router-dom';

const ItemCount = (props) => {

  const [quantity, setQuantity] = React.useState(0);
  const [quantityAdded, setQuantityAdded] = React.useState(0);
  const [added, setAdded] = React.useState(false);

  const onAdd = () => {
    setAdded(true);
    setQuantityAdded(quantity);
  }

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
        {!added && (<>
          <button onClick={subtract}>-</button>
          <input type="text" placeholder={props.initial} value={quantity} readOnly/>
          <button onClick={add}>+</button>
        </>)}
        {quantityAdded > 0 && added ? <Link to={`/cart`}>
          <button className="addToCart">Checkout</button>
        </Link> : (quantity > 0 && <button className="addToCart" onClick={onAdd}>Añadir al carro</button>)}
      </>
  )
}

export default ItemCount
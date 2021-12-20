import React, {useContext} from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import {CartContext} from '../contexts/CartContext';

const ItemDetail = ({id, img, name, description, stock, price}) => {
  const context = useContext(CartContext)
  const {addToCart} = context;
  const [itemCount, setItemCount] = React.useState(0);


  const onAdd = (quantity) => {
    const item = {
      id,
      img,
      name,
      price,
      quantity
    }

    setItemCount(itemCount + quantity);
    addToCart(item);
  }

  return (
      <>
        <div className="detail-item">
          <img src={img} alt={name}/>
          <div className="detail-item-info">
            <div className="detail-info">
              <h1 className="detail-title">{name}</h1>
              <p>{description}</p>
            </div>
            <div className="info-price">
              <div className="buy">
                {itemCount === 0 ? <ItemCount stock={stock} initial={itemCount} onAdd={onAdd}/> : <Link to={`/cart`}>
                  <button className="addToCart">Checkout</button>
                </Link>}
              </div>
              {price && <p className="price">{price.toFixed(2)}</p>}
            </div>
          </div>
        </div>
      </>
  )
}

export default ItemDetail;
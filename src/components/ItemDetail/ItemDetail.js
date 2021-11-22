import React from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemsList = ({img, name, description, stock, price}) => {

  return (
      <>
        <div className="item">
          <img src={img} alt={name}/>
          <div className="item-info">
            <div className="info">
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
            <div className="info-price">
              <div className="buy">
                <ItemCount
                    stock={stock}
                    initial={0}
                />
              </div>
              <p className="price">{price}</p>
            </div>
          </div>
        </div>
      </>
  )
}

export default ItemsList;
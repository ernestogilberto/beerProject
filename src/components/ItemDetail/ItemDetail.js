import React from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemsList = ({item}) => {

  return (
      <>
        <div className="item">
          <img src={item.img} alt={item.name}/>
          <div className="item-info">
            <div className="info">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
            <div className="info-price">
              <div className="buy">
                <ItemCount
                    stock={item.stock}
                    initial={0}
                />
              </div>
              <p className="price">{item.price}</p>
            </div>
          </div>
        </div>
      </>
  )
}

export default ItemsList;
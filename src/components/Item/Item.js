import React from 'react';
import './Item.css'
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';

const Item = ({item}) => {

  const [detail, setDetail] = React.useState(false);

  const clicked = () => {
    setDetail(!detail);
  }

  return (
      <>
        <div className="item">
          <img src={item.img} alt={item.name} onClick={clicked}/>
          <div className="item-info">
            <div className="info">
              <h1>{item.name.toUpperCase()}</h1>
              <p>{item.description}</p>
            </div>
            <div className="info-price">
              <div className="buy">
                <ItemCount
                    stock={item.stock}
                    initial={0}
                />
              </div>
              <p className="price">{(item.price.toFixed(2))}</p>
              <Link to={`/item/${item.id}`}>Details</Link>
            </div>
          </div>
        </div>
      </>
  )
}

export default Item;
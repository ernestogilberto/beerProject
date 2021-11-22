import React from 'react';
import './Item.css'
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';

const Item = ({img, name, description, stock, price, id}) => {

  const [detail, setDetail] = React.useState(false);

  const clicked = () => {
    setDetail(!detail);
  }

  return (
      <>
        <div className="item">
          <img src={img} alt={name} onClick={clicked}/>
          <div className="item-info">
            <div className="info">
              <h1>{name.toUpperCase()}</h1>
              <p>{description}</p>
            </div>
            <div className="info-price">
              <div className="buy">
                <ItemCount
                    stock={stock}
                    initial={0}
                />
              </div>
              <p className="price">{(price.toFixed(2))}</p>
              <Link to={`/item/${id}`}>Details</Link>
            </div>
          </div>
        </div>
      </>
  )
}

export default Item;
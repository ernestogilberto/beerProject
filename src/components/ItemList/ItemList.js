import React from 'react';
import './ItemList.css'
import ItemCount from '../ItemCount/ItemCount';
import ItemsDetailContainer from '../ItemDetailContainer/ItemDetailContainer.js';

const ItemsList = (props) => {

  const [detail, setDetail] = React.useState(false);

  const clicked = () => {
    setDetail(!detail);
  }

  return (
      <>
        <div className="item-list">
          <img src={props.img} alt={props.name} onClick={clicked}/>
          <div className="item-list-info">
            <div className="info">
              <h1>{props.name.toUpperCase()}</h1>
              <p>{props.description}</p>
            </div>
            <div className="info-price">
              <div className="buy">
                <ItemCount
                    stock={props.stock}
                    initial={0}
                />
              </div>
              <p className="price">{(props.price.toFixed(2))}</p>
            </div>
          </div>
        </div>
        {detail && <ItemsDetailContainer key={props.index} name={props.name} description={props.description}
                                         img={props.img} price={props.price} stock={props.stock}/>}
      </>
  )
}

export default ItemsList;
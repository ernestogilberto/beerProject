import React from "react";
import './ItemList.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemsList = (props) => {

  return (
      <>
        <div className="item-list">
          <img src={props.img} alt={props.name}/>
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
      </>
  )
}

export default ItemsList;
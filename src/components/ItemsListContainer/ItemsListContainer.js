import React from "react";
import './ItemsListContainer.css'
import ItemList from '../ItemList/ItemList.js';

const ItemsListContainer = (props) => {
  return (
      <>
        <div className="items-list-container">
          {props.beers.map((beer, index) => <ItemList key={index} name={beer.name} description={beer.description}
                                                      img={beer.img} price={beer.price} stock={beer.stock}/>)
          }
        </div>
      </>
  )
}

export default ItemsListContainer;
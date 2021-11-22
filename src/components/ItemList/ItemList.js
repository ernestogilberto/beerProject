import React from 'react';
import './ItemList.css'
import Item from '../Item/Item';

const ItemsList = ({beers}) => {

  return (
      <>
        {beers.map((beer, index) => <Item key={index} item={beer}/>)
        }
      </>
  )
}

export default ItemsList;
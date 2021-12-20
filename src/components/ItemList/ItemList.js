import React from 'react';
import Item from '../Item/Item';

const ItemsList = ({beers}) => {

  return (
      <>
        {beers.map((beer, index) => <Item key={index} {...beer}/>)
        }
      </>
  )
}

export default ItemsList;
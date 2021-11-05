import React from "react";
import './ItemsListContainer.css'
import ItemList from '../ItemList/ItemList.js';

const ItemsListContainer = () => {
  return (
      <>
        <div className="items-list-container">
          <ItemList/>
          <ItemList/>
          <ItemList/>
          <ItemList/>
          <ItemList/>
          <ItemList/>
          <ItemList/>
          <ItemList/>
          <ItemList/>
          <ItemList/>
        </div>
      </>
  )
}

export default ItemsListContainer;
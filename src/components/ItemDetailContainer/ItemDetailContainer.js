import ItemDetail from '../ItemDetail/ItemDetail.js';
import React, {useEffect} from 'react';
import './ItemDetailContainer.css'
import {useParams} from 'react-router-dom';
import beers from '../../beers'


const ItemsDetailContainer = () => {

  const {idItem} = useParams();

  const [item, setItem] = React.useState({});

  const getItem = (timeout, items) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items.find(beer => beer.id === parseInt(idItem)))
      }, timeout);
    });
  }

  useEffect(() => {
    getItem(2000, beers).then(item => {
      setItem(item);
    }).catch(error => {
      console.log(error);
    });
  },);

  return (
      <>
        <div className="items-detail-container">
          <ItemDetail item={item}/>
        </div>
      </>
  )
}

export default ItemsDetailContainer;
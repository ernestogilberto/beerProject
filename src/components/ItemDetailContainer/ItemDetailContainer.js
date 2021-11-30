import ItemDetail from '../ItemDetail/ItemDetail.js';
import React, {useEffect} from 'react';
import './ItemDetailContainer.css'
import {useParams} from 'react-router-dom';
import fetchData from '../../utils/fetchData';


const ItemsDetailContainer = () => {

  const {idItem} = useParams();

  const [item, setItem] = React.useState({});

  useEffect(() => {

    fetchData()
        .then(r => setItem(r.find(item => item.id === idItem)))
        .catch(e => console.log(e));
  },[idItem]);

  return (
      <>
        <div className="items-detail-container">
          <ItemDetail {...item}/>
        </div>
      </>
  )
}

export default ItemsDetailContainer;
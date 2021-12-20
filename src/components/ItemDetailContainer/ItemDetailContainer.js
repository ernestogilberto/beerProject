import ItemDetail from '../ItemDetail/ItemDetail.js';
import React, {useEffect} from 'react';
import './ItemDetailContainer.css'
import {useParams} from 'react-router-dom';
import {getBeerById} from '../../utils/fetchData';


const ItemsDetailContainer = () => {

  const {idItem} = useParams();

  const [item, setItem] = React.useState({});

  useEffect(() => {
    getBeerById(idItem).then(r => setItem(r));
  }, [idItem]);

  return (
      <>
        <div className="items-detail-container">
          <ItemDetail {...item}/>
        </div>
      </>
  )
}

export default ItemsDetailContainer;
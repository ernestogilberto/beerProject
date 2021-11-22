import React, {useEffect} from 'react';
import './ItemsListContainer.css'
import ItemList from '../ItemList/ItemList.js';
import SearchBar from '../SearchBar/SearchBar';
import {useParams} from 'react-router-dom';
import beers from '../../beers'

const ItemsListContainer = () => {

  const [currentBeers, setCurrentBeers] = React.useState([]);
  const {categoryId} = useParams();

  const getBeers = (timeout, items) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        categoryId ? resolve(items.filter(item => item.category === categoryId)) : resolve(items);
      }, timeout);
    });
  }

  useEffect(() => {
    getBeers(2000, beers).then(items => {
      setCurrentBeers(items);
    }).catch(error => {
      console.log(error);
    });
  }, [categoryId]);

  return (
      <>
        <SearchBar beers={currentBeers}/>
        <div className="items-list-container">
          <ItemList beers={currentBeers}/>
        </div>
      </>
  )
}

export default ItemsListContainer;
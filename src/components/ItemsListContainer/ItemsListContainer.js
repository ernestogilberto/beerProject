import React, {useEffect} from 'react';
import './ItemsListContainer.css'
import ItemList from '../ItemList/ItemList.js';
import SearchBar from '../SearchBar/SearchBar';
import {useParams} from 'react-router-dom';
import fetchData from '../../utils/fetchData';

const ItemsListContainer = () => {

  const [currentBeers, setCurrentBeers] = React.useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    fetchData()
        .then(r => setCurrentBeers(categoryId ? r.filter(item => item.category === categoryId) : r))
        .catch(e => console.log(e));
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
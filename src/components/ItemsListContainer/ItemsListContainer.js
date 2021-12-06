import React, {useEffect} from 'react';
import './ItemsListContainer.css'
import ItemList from '../ItemList/ItemList.js';
import SearchBar from '../SearchBar/SearchBar';
import {useParams} from 'react-router-dom';
import fetchData from '../../utils/fetchData';

const ItemsListContainer = () => {

  const [currentBeers, setCurrentBeers] = React.useState([]);
  const [originalBeers, setOriginalBeers] = React.useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    categoryId ? fetchData(categoryId).then(r => {
      setCurrentBeers(r)
      setOriginalBeers(r)
    }) : fetchData().then(r => {
      setCurrentBeers(r)
      setOriginalBeers(r)
    });
  }, [categoryId]);

  const UpdateBySearch = (search) => {
    setCurrentBeers(search);
  }

  return (
      <>
        <SearchBar beers={originalBeers} UpdateBySearch={UpdateBySearch}/>
        <div className="items-list-container">
          <ItemList beers={currentBeers}/>
        </div>
      </>
  )
}

export default ItemsListContainer;
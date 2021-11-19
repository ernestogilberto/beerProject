import React, {useEffect} from 'react';
import './ItemsListContainer.css'
import ItemList from '../ItemList/ItemList.js';

const ItemsListContainer = (props) => {

  const [beers, setBeers] = React.useState([]);

  const getBeers = (timeout, items) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (items.length > 0) {
          resolve(items);
        } else {
          reject(new Error('No items'));
        }
      }, timeout);
    });
  }

  useEffect(() => {
    getBeers(2000, props.beers).then(items => {
      setBeers(items);
    }).catch(error => {
      console.log(error);
    });
  }, [props.beers]);

  return (
      <>
        <div className="items-list-container">
          {beers.map((beer, index) => <ItemList key={index} name={beer.name} description={beer.description}
                                                img={beer.img} price={beer.price} stock={beer.stock}/>)
          }
        </div>
      </>
  )
}

export default ItemsListContainer;
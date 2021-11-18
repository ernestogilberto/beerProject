import ItemDetail from "../ItemDetail/ItemDetail.js";
import React, {useEffect} from "react";
import './ItemDetailContainer.css'


const ItemsDetailContainer = (props) => {

  const [detail, setDetail] = React.useState(true);

  const clicked = () => {
    setDetail(!detail);
  }

  const [item , setItem] = React.useState({});

  const getItem = (timeout, item) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(new Error('No item'));
        }
      }, timeout);
    });
  }

  useEffect (() => {
    getItem(2000, props).then(item => {
      setItem(item);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
      <>
        {detail && <div className="items-detail-container">
          <ItemDetail key={item.index} name={item.name} description={item.description}
                      img={item.img} price={item.price} stock={item.stock}/>
        </div>}
        {detail && <span className="close" onClick={clicked}>X</span>}
      </>
  )
}

export default ItemsDetailContainer;
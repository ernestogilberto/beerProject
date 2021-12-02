import React, {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
import {Link} from 'react-router-dom';
import './Cart.css';
import {collection, doc, increment, setDoc, updateDoc} from 'firebase/firestore';
import db from '../../utils/firebaseConfig';

const Cart = () => {

  const context = useContext(CartContext);
  const {cartList, deleteAll, deleteItem, totalItem, total} = context;

  const createOrder = () => {
    const order = {
      buyer: {
        name: 'John Doe',
        email: 'john@doe.com',
        phone: '123456789'
      },
      items: cartList.map(item => ({
        id: item.id,
        title: item.name,
        price: item.price
      })),
      total: total(),
    };

    (async function () {
      const newOrderRef = doc(collection(db, 'orders'))
      await setDoc(newOrderRef, order);
      return newOrderRef
    })()

    cartList.forEach(async item => {
      const ItemRef = doc(collection(db, 'beers'), item.id)
      await updateDoc(ItemRef, {
        stock: increment(-item.quantity)
      })
    })

    deleteAll();
  }

  return (
      <div className="cart-container">
        <div className="cart-header">
          <h1 className="cart-title">Cart</h1>
          <Link to={'/'}>
            <button className="continue-btn">Seguir Comprando</button>
          </Link>
        </div>
        {context.cartList.length > 0 ? (cartList.map(item => (
                <div className="cart-item" key={item.id}>
                  <div>
                    <img src={item.img} alt={item.name}/>
                  </div>
                  <div className="cart-item--info">
                    <h2>Cantidad: {item.quantity}</h2>
                    <h3>Item: {item.name}</h3>
                    <p>Precio unitario: ${item.price.toFixed(2)}</p>
                    <h4>Total producto: ${totalItem(item.id).toFixed(2)}</h4>
                    <button className="delete-btn" onClick={() => deleteItem(item.id)}>Eliminar</button>
                  </div>
                </div>))
        ) : <h1 className="empty-cart">No hay items en el carrito</h1>}
        <h1>Total: $ {total().toFixed(2)}</h1>
        {context.cartList.length > 0 && (<>
          <button className="deleteAll-btn" onClick={deleteAll}>Vaciar Carrito</button>
          <button className="create-order" onClick={createOrder}>CheckOut</button>
        </>)}
      </div>
  );
}

export default Cart;
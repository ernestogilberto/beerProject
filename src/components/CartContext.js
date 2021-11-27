import {createContext, useState} from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = ({img, id, name, price, quantity}) => {
    cartList.find(item => item.id === id)
        ? setCartList(cartList.map(item => item.id === id ? {...item, quantity: item.quantity + quantity} : item))
        : setCartList([...cartList, {img, id, name, price, quantity}]);
  };

  const deleteItem = (id) => {
    setCartList(cartList.filter(item => item.id !== id));
  }

  const deleteAll = () => {
    setCartList([]);
  }

  const totalItem = (id) => {
    let item = cartList.find(item => (item.id === id))
    return item.quantity * item.price;
  }

  const total = () => {
    return cartList.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }

  const totalQuantity = () => {
    return cartList.reduce((acc, item) => acc + item.quantity, 0);
  }

  return (
      <CartContext.Provider value={{cartList, addToCart, deleteItem, deleteAll, totalItem, totalQuantity, total}}>
        {children}
      </CartContext.Provider>
  )
}

export default CartContextProvider;
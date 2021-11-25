import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemsDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemsListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemsListContainer/>}/>
          <Route path="/item/:idItem" element={<ItemsDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

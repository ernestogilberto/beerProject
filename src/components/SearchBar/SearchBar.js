import React from "react";
import './SearchBar.css';
import ItemsListContainer from '../ItemsListContainer/ItemsListContainer.js';

const SearchBar = (props) => {

  const [keyword, setKeyword] = React.useState('');
  const [beers, setBeers] = React.useState(props.beers);

  const submitHandler = (e) => {
    e.preventDefault();
    let filter = props.beers.filter(beer => beer.name.toLowerCase().includes(keyword.toLowerCase()));
    setBeers(filter);
  }

  return (
      <>
        <div className="search-bar">
          <form>
            <label htmlFor="keyword">
              Buscar:
              <input type="text" id="keyword" placeholder="Encuentra tu favorita."
                     value={keyword}
                     onChange={(e) => setKeyword(e.target.value)}
                     onKeyUp={(e) => submitHandler(e)}/>
            </label>
          </form>
        </div>
        {beers.length > 0 ? <ItemsListContainer beers={beers}/> :
            <div id="error"><h1 className="error">Producto no encontrado</h1></div>}
      </>
  )
}

export default SearchBar;
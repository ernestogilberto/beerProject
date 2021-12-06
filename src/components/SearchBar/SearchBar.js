import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {

  const [keyword, setKeyword] = React.useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    let filter = props.beers.filter(beer => beer.name.toLowerCase().includes(keyword.toLowerCase()));
    props.UpdateBySearch(filter);
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
      </>
  )
}

export default SearchBar;
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
// import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js'
import beers from './beers.js';

function App() {
  return (
      <>
        <NavBar/>
        <SearchBar beers={beers}/>
      </>
  );
}

export default App;

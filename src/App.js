import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import SearchBar from './components/SearchBar/SearchBar.js'
import beers from './beers.js';

function App() {
  return (
      <>
        <NavBar/>
        <SearchBar beers={beers} />
      </>
  );
}

export default App;

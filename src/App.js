import './App.css';
import SearchBar from './components/searchBar'
import ProductList from './components/poductsList'
import Login from './components/login'
import { useState, useEffect } from 'react'
import api from './api/requests'

function App() {
  const [ search, setSearch] = useState('');
  const [ products, setProducts ] = useState([]);
  const [ wishlist, setWishlist ] = useState([]);
  const [isLoggedin , setIsLoggedin] = useState(false);



  useEffect(() => {api.fetchProducts(setProducts)},[])
  useEffect(() => {api.fetchWishlist(setWishlist)},[])
  useEffect(() => {api.fetchWishlist(setWishlist)},)






  return (
    <div className="App">
      <SearchBar search = {search} setSearch = {setSearch} />

      {!isLoggedin &&
        <Login setIsLoggedin = {setIsLoggedin} />
      
      }
      {search!=='' && 
        <ProductList 
          data = {products}
          search = {search} 
          isLoggedin = {isLoggedin}
          wishlist = {wishlist}
        />
      }



    </div>
  );
}

export default App;

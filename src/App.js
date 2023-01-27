import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Header from './Components/Header';
import Product from './Components/Product';
import  './Style.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CartPage from './Components/CartPage';
import Wishlist from './Components/Wishlist';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home'element={<Home/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/header'element={<Header/>}/>
      <Route path='/product'element={<Product/>}/>
      <Route path='/cartPage'element={<CartPage/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;

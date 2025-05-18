import React from 'react'
import './app.css';
import Navbar from './Components/Navbar';
import ProductsDisplay from './Components/ProductsDisplay';
import {CartProvider} from './Components/CartContext.jsx';
import { BrowserRouter ,Routes,Route } from 'react-router';
import Cart from './Components/Cart.jsx';
import Product from './Components/Product.jsx';

const App = () => {
  return (
    
      <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductsDisplay />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product' element={<Product/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
    
  )
}

export default App

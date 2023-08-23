import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import { ShopContextProvider } from './context/ShopContext';


export default function App() {
  return (
    <div>

      <ShopContextProvider>

        <Router>

          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>

      </ShopContextProvider>

    </div>
  )
}

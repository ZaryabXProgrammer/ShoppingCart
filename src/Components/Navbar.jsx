import React from 'react'
import {Link} from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>

        <div className="links">
      
      <Link to='/'>SHOP</Link>
      <Link to='/cart'><ShoppingCart size={32}/></Link>
          </div>
    </div>
  )
}
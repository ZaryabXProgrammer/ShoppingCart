import React from 'react'
import { PRODUCTS } from '../../Products'
import Product from '../../Components/Product'
import './Shop.css'



export default function Shop() {
    return (
        <div className='shop'>
            <h1 className='shoptitle'>ZARYAB'S SHOP</h1>

            <div className="products">
                {PRODUCTS.map((product)=>(<Product data={product}/>))}
            </div>
        </div> 
    )
}

import { useContext } from "react";
import React from 'react'
import { ShopContext } from "../../context/ShopContext";

export default function CartItem(props) {


  const { id, productName, price, productImage } = props.data;
  const { addToCart, removeFromCart, cartItems, updateCartItemCount } = useContext(ShopContext);

  return (

    <div className="cartItem">
      <div className='product'>
        <img src={productImage} alt='product' />

        <div className="description">
          <b><p>{productName}</p></b>
        </div>
        <p className='price'>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>

    </div>

  )
}

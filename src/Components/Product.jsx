import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export default function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]

  return (
    <div className='product'>
      <img src={productImage} alt='product' />

      <div className="description">
        <b><p>{productName}</p></b>
      </div>
      <p className='price'>${price}</p>

      <button className='addToCartBtn' onClick={() => addToCart(id)}>ADD TO CART { cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  );
}

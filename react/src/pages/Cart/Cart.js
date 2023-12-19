import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/categories/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  console.log(cartItems)
  const dispatch = useDispatch();
  const [cart,setCart] = React.useState([])

  const handleRemoveFromCart = (product) => {
    console.log("Removed from card:", product);
    dispatch(removeFromCart({...product}));
    console.log(cart) 

  }
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((cart) => (
          <li key={cart.id}>
              <h2>{cart}</h2>
            <button onClick={() => handleRemoveFromCart(cart)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

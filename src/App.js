import React, { useState } from 'react';
import './App.css';

const BookingApp = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalInvoice, setTotalInvoice] = useState(0);

  const addItemToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>{
        if( cartItem.id === item.id){
          cartItem.quantity = cartItem.quantity + 1;
          return cartItem;
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    setTotalInvoice(totalInvoice + item.price);
  };

  const removeItemFromCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if(existingItem === undefined){
      return ;
    }
    if (existingItem.quantity === 1) {
      const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.map((cartItem) =>{
        cartItem.quantity = cartItem.quantity - 1;
        return cartItem;
      });
      setCartItems(updatedCartItems);
    }

    setTotalInvoice(totalInvoice - item.price);
  };

  return (
    <div className="main">
      <h1>Dine in Booking App</h1>
      <div className="container">
      <div id="menu">

          <h2>ABC Cafe</h2>
          <h3>Menu</h3>
          <ul>
            <li>
              <div className="menu-item">
                <div className="item-description">
                  <span>Pizza - 299</span>
                  </div>
                <div className="cart-button">
                  <button onClick={() => removeItemFromCart({id: 1, name: 'Pizza', price: 299})}>-</button>
                  <span>{cartItems.find((item) => item.id === 1)?.quantity || 0}</span>
                  <button onClick={() => addItemToCart({ id: 1, name: 'Pizza', price: 299 })}>+</button>
                  </div>
                </div>
            </li>
            <li>
              <div className="menu-item">
                <div className="item-description">
                  <span>Burger - 199</span>
                  </div>
                <div className="cart-button">
                  <button onClick={() => removeItemFromCart({id: 2, name: 'Burger', price: 199})}>-</button>
                  <span>{cartItems.find((item) => item.id === 2)?.quantity || 0}</span>
                  <button onClick={() => addItemToCart({ id: 2, name: 'Burger', price: 199 })}>+</button>
                  </div>
                </div>
            </li>
            <li>
              <div className="menu-item">
                <div className="item-description">
                  <span>Coke - 99</span>
                  </div>
                <div className="cart-button">
                  <button onClick={() => removeItemFromCart({id: 3, name: 'Coke', price: 99})}>-</button>
                  <span>{cartItems.find((item) => item.id === 3)?.quantity || 0}</span>
                  <button onClick={() => addItemToCart({ id: 3, name: 'Coke', price: 99 })}>+</button>
                  </div>
                </div>
            </li>
          </ul>
          </div>
        <div id="cart">
          <h2>Cart</h2>
          {cartItems.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="item-description">
                    {item.name} - {item.price}
                  </div>
                  <div className="cart-button">
                    <button onClick={() => removeItemFromCart(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addItemToCart(item)}>+</button>
                    </div>
                </li>
              ))}
            </ul>
          )}
          <h3>Total Invoice: Rs.{totalInvoice}</h3>
          </div>
        </div>
    </div>
  );
};

export default BookingApp;

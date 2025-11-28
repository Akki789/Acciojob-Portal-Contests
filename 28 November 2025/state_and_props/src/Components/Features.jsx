import React, { useState } from "react";


const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Shoes", price: 2000 },
    { id: 3, name: "Watch", price: 1500 }
];


export default function Features() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(product) {
    setCartItems([...cartItems, product]);
  }

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
}

function Navbar({cartCount}) {
  return (
    <nav>
      <p>Total items in cart: {cartCount}</p>
    </nav>
  );
}

function ProductList({onAddToCart}) {
  return (
    <ul>
      {products.map((product) => ( 
        <li key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  );
}

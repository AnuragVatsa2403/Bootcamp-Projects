import React, { useState } from 'react';

const products = [
  { id: 1, name: 'T-Shirt', price: 499 },
  { id: 2, name: 'Shoes', price: 1299 },
  { id: 3, name: 'Watch', price: 999 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isAlreadyInCart = cart.find((item) => item.id === product.id);

    if (isAlreadyInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm">₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 px-3 py-1 bg-blue-600 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} - ₹{item.price * item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
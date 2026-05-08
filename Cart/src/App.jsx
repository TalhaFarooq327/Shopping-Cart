import "./App.css";
import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 500,
    },
    {
      id: 2,
      name: "Phone",
      price: 300,
    },
    {
      id: 3,
      name: "Headphones",
      price: 100,
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <ProductList products={products} addToCart={addToCart} />

      <div className="cart">
        <h2>Cart</h2>

        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

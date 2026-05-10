import "./App.css";
import { useReducer } from "react";
import ProductList from "./components/ProductList";
import cartReducer from "./store/cartReducer";
import CartUi from "./components/cartUi";

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);

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
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="app">
      <ProductList products={products} addToCart={addToCart} />

      <CartUi cart={cart} dispatch={dispatch} />
    </div>
  );
}

export default App;

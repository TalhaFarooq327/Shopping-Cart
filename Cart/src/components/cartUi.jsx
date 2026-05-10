function CartUi({ cart, dispatch }) {
  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>

          <p>${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <button
            onClick={() =>
              dispatch({
                type: "INCREMENT",
                payload: item.id,
              })
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "DECREMENT",
                payload: item.id,
              })
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "REMOVE",
                payload: item.id,
              })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
export default CartUi;

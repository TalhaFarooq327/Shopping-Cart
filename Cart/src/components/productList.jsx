function ProductList({ products, addToCart }) {
  return (
    <div className="products-container">
      <h1 className="title">Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h3>{product.name}</h3>

            <p className="price">${product.price}</p>

            <button className="btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

import React, { useEffect, useState } from "react";
import Product from "./components/Product";

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.in/api/products");
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(({ id, title, price }) => (
          <Product key={id} title={title} price={price} />
        ))}
      </ul>
    </div>
  );
}

export default Products;

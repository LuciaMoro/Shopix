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
    <div className="container my-5">
      <div className="row gy-4">
        {products.map(({ id, title, price }) => (
          <Product key={id} title={title} price={price} />
        ))}
      </div>
    </div>
  );
}

export default Products;

import React, { useEffect, useState } from "react";
import Product from "./components/product/Product";

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
  console.log("products", products);
  return (
    <div className="container my-5">
      <div className="row gy-4">
        {products.map(({ id, title, price, image, brand }) => (
          <Product
            key={id}
            title={title}
            price={price}
            image={image}
            id={id}
            brand={brand}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;

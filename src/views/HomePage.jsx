import React, { useEffect, useState } from "react";
import Product from "../components/product/Product";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.in/api/products");
      const data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  const handleOnChange = (e) => {
    console.log(e.target);
    setSearchTerm(e.target.value);
    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(e.target.value)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <div className="container mt-4 d-flex justify-content-end align-items-center">
        <label className="pointer me-2" htmlFor="search">
          Search:{" "}
        </label>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleOnChange}
          name="search"
          id="search"
        />
      </div>
      <div className="container my-5">
        <div className="row gy-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(({ id, title, price, image, brand }) => (
              <Product
                key={id}
                title={title}
                price={price}
                image={image}
                id={id}
                brand={brand}
              />
            ))
          ) : isLoading ? null : (
            <h4>"We didn't find any products :("</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

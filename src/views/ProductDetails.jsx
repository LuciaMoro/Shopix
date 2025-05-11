import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Button from "../components/button/Button";
function ProductDetails() {
  const [product, setProduct] = useState();
  const params = useParams();

  const fetchProductDetails = async (id) => {
    const response = await fetch(`https://fakestoreapi.in/api/products/${id}`);
    const data = await response.json();
    setProduct(data.product);
  };
  useEffect(() => {
    fetchProductDetails(params.id);
  }, []);

  const addToCart = () => {
    const { image, title, price, id } = product;
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = [...existingCart];

    const found = newCart.findIndex((product) => product.id === id);
    if (found > -1) {
      newCart[found].qty += 1;
    } else {
      newCart.push({ image, title, price, qty: 1, id });
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return product ? (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-8 p-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <img
                        className="card-img-top"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <div className="col-6 mt-4 ps-4">
                      <div>
                        Model: <span className="">{product.model}</span>
                      </div>
                      <div>
                        Brand:{" "}
                        <span className="text-uppercase">{product.brand}</span>
                      </div>
                      <div>
                        Color: <span className="">{product.color}</span>
                      </div>
                      <div>
                        Category: <span className="">{product.category}</span>
                      </div>
                      <div className="mt-4">
                        <span className="fst-italic">Useful info:</span>
                        <ul>
                          <li>Shipment will be in 14 working days</li>
                          <li>No extra shipping cost!</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 p-4">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="card-title text-danger">${product.price}</h3>
                <p>In stock</p>
                <p>Delivered by: UPS</p>
                <Button handleClick={addToCart}>Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <h5>Description</h5>
        <div>{product.description}</div>
      </div>
    </>
  ) : null;
}

export default ProductDetails;

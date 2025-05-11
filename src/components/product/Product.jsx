import "./Product.css";
import Button from "../button/Button";
function Product({ title, price, image, id, brand }) {
  const addToCart = () => {
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
  return (
    <div className="col-4">
      <div className="card product p-4 ">
        <img
          className="img"
          height={100}
          width={100}
          src={image}
          alt="image-product"
        />
        <div className="card-body">
          <h5 className="card-title title">{title}</h5>
          <div>Brand: {brand}</div>
          <div>${price}</div>
        </div>
        <Button handleClick={addToCart}>Add to Cart</Button>
      </div>
    </div>
  );
}
export default Product;

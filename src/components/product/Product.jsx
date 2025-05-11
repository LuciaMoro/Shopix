import "./Product.css";
import Button from "../button/Button";
function Product({ title, price, image, id }) {
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
      <div className="card product">
        <div>{title}</div>
        <div>${price}</div>
        <img height={100} width={100} src={image} alt="image-product" />
        <Button handleClick={addToCart}>Add to Cart</Button>
      </div>
    </div>
  );
}
export default Product;

import "./Product.css";

function Product({ title, price }) {
  return (
    <div className="col-4">
      <div className="card product">
        <div>{title}</div>
        <div>${price}</div>
      </div>
    </div>
  );
}
export default Product;

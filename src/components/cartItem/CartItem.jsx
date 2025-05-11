import Button from "../button/Button";
import "./CartItem.css";

function CartItem({
  id,
  title,
  price,
  image,
  qty,
  decreaseQty,
  increaseQty,
  remove,
}) {
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
          <div>${price}</div>
          <div>
            Quantity: <Button handleClick={() => decreaseQty(id)}>-</Button>
            {qty}
            <Button handleClick={() => increaseQty(id)}>+</Button>
          </div>
          <Button handleClick={() => remove(id)}>Remove</Button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;

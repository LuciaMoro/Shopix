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
    <div className="card cart-item p-4">
      <div className="row">
        <div className="col-6 d-flex justify-content-center">
          <img height={250} src={image} alt="image-product" />
        </div>
        <div className="card-body col-6">
          <h5 className="card-title title">{title}</h5>
          <h4>${price}</h4>
          <div className="d-flex flex-column align-items-end">
            <div className="my-3">
              Quantity: <Button handleClick={() => decreaseQty(id)}>-</Button>
              <span className="mx-2 qty">{qty}</span>
              <Button handleClick={() => increaseQty(id)}>+</Button>
            </div>
            <Button handleClick={() => remove(id)}>Remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartItem;

import { useState, useEffect } from "react";
import CartItem from "../components/cartItem/cartItem";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setCart(cart);
    calculateAndSetTotalAmount();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateAndSetTotalAmount();
  }, [cart]);

  const calculateAndSetTotalAmount = () => {
    const amount = cart.reduce(
      (acc, curr) => (acc += curr.qty * curr.price),
      0
    );
    setTotalAmount(amount);
  };

  const increaseQty = (id) => {
    const found = cart.findIndex((cartItem) => cartItem.id === id);
    if (found > -1) {
      cart[found].qty += 1;
      setCart([...cart]);
    }
  };

  const decreaseQty = (id) => {
    const found = cart.findIndex((cartItem) => cartItem.id === id);
    if (found > -1 && cart[found].qty > 1) {
      cart[found].qty -= 1;
      setCart([...cart]);
    }
  };

  const remove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          {cart.map(({ id, title, price, image, qty }) => (
            <CartItem
              key={id}
              id={id}
              title={title}
              price={price}
              image={image}
              qty={qty}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              remove={remove}
            />
          ))}
        </div>
        <div className="col-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Summary</h5>
              <p>Total:</p>
              <p>${totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

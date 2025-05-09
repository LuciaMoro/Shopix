import Navbar from "./components/Navbar";
import Button from "./components/Button";
function Checkout() {
  return (
    <>
      <h1>Shopix</h1>
      <div className="header">Header</div>
      <Navbar />
      <Button handleClick={() => console.log("checkout")}>Checkout</Button>
    </>
  );
}

export default Checkout;

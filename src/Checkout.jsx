import Button from "./components/button/Button";
function Checkout() {
  return (
    <>
      <Button handleClick={() => console.log("checkout")}>Checkout</Button>
    </>
  );
}

export default Checkout;

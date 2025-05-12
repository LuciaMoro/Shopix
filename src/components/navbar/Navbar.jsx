import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-body-tertiary d-flex p-2">
      <Link className="nav-link ms-4" to="/">
        Home
      </Link>

      <Link className="nav-link ms-4" to="/checkout">
        Checkout
      </Link>
    </nav>
  );
}
export default Navbar;

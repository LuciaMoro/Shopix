import { Link } from "react-router";
import Icon from "../assets/logo.png";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo d-flex align-items-center">
        <img height={96} width={96} src={Icon} alt="logo" />
        <h1 className="ms-4 title">Shopix</h1>
      </Link>
    </div>
  );
}

export default Header;

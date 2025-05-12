import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router";
import "./Layout.css";

function Layout() {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <Navbar />
      <div className="flex-grow-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;

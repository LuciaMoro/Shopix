import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;

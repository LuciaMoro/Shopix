import Header from "./Header";
import Navbar from "./Navbar";
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

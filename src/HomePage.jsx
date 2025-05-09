// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./Products";

function HomePage() {
  return (
    <>
      <h1>Shopix</h1>
      <div className="header">Header</div>
      <Navbar />
      <Products />
    </>
  );
}

export default HomePage;

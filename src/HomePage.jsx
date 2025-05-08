// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function HomePage() {
  return (
    <>
      <h1>Shopix</h1>
      <div className="header">Header</div>
      <Navbar />
      <div className="products">Products</div>
    </>
  );
}

export default HomePage;

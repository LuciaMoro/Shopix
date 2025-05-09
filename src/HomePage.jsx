// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./Products";
import Button from "./components/Button";

function HomePage() {
  return (
    <>
      <h1>Shopix</h1>
      <div className="header">Header</div>
      <Navbar />
      <Button handleClick={() => console.log("test")} />
      <Products />
    </>
  );
}

export default HomePage;

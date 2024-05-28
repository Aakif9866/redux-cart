import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Products from "./components/Products";

export default function App() {
  return (
    <div>
      <Products />
    </div>
  );
}

import React from "react";
import HeroSection from "./component/layout/HeroSection";
import ProductList from "./component/layout/ProductList";
import ProductCard from "./component/layout/ProductCard";
import Contact from "./component/layout/contact";
import "./index.css";



function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <ProductList />
      <ProductCard />
     
      <Contact/>

    </div>
  );
}

export default App;

import React from "react";
import ProductList from "./ProductList";

const ProductCard = ({ name, price, rating, category, image, description }) => {
  return (
    <div className="product-card px-10 grid">
      <img src={image} alt={name} />
      <h2 className="text-red-900 font-semibold">{name}</h2>
      <p>{description}</p>
      <p>Category: {category}</p>
      <p className="text-blue-900 font-semibold">Price: ${price}</p>
      <p>Rating: ⭐ {rating}</p>
      <button className="m-2 bg-[#1d833a] text-white px-3 py-1 text-lg rounded-full" onClick={()=>alert('successfully added....')}>Add To Cart </button>
    </div>
  );
};

export default ProductCard;

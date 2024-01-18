import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";

const Shop = () => {
  return (
    <div>
      <div className="mt-20 mb-10 text-center text-4xl font-bold text-gray-900">
        <h1>Swift Cart</h1>
      </div>
      <div className="products w-full h-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

import React, { useContext } from "react";
import { ShopContext } from "./../../context/shop-context";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product rounded-2xl w-72 h-80 m-20 flex flex-col items-center justify-center cursor-pointer">
      <img src={productImage} className="w-[400px] m-3" />

      <div className="desc text-center text-gray-900">
        <p className="mb-3">
          <b>{productName}</b>
        </p>
        <p className="mb-3">${price}</p>
      </div>

      <button
        onClick={() => addToCart(id)}
        className="px-4 py-3 bg-gray-900 text-gray-100 font-bold tracking-wide border-none rounded-xl cursor-pointer hover:bg-gray-400 hover:text-gray-900 hover:transition-all"
      >
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;

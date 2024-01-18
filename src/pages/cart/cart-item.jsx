import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { cartItems, addToCart, removeToCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="md:w-[700px] w-[300px] flex md:flex-row flex-col items-center m-8 rounded-3xl shadow-2xl">
      <img src={productImage} className="w-[200px] m-4" />

      <div className="w-full text-3xl md:text-left text-center p-4 text-gray-900">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>

        <div>
          <button onClick={() => removeToCart(id)}> - </button>
          <input
            className="w-10 text-center font-bold"
            type="text"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

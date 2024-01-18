import React, { useContext } from "react";
import { PRODUCTS } from "./../../products";
import { ShopContext } from "./../../context/shop-context";
import CartItem from "./cart-item";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 text-4xl font-bold text-gray-900">
        <h1>Your Cart Items</h1>
      </div>

      <div className="flex flex-col justify-center items-center">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="m-3 text-gray-900 font-semibold">
            Subtotal: ${totalAmount}
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-3 m-3 bg-gray-900 text-gray-100 font-bold tracking-wide border-none rounded-xl cursor-pointer hover:bg-gray-400 hover:text-gray-900 hover:transition-all"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => {
              // checkout();
              navigate(alert("Purchase Successful"));
            }}
            className="px-4 py-3 m-3 bg-gray-900 text-gray-100 font-bold tracking-wide border-none rounded-xl cursor-pointer hover:bg-gray-400 hover:text-gray-900 hover:transition-all"
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1 className="font-bold text-4xl mt-6 text-gray-900">
          Your Cart is Empty
        </h1>
      )}
    </div>
  );
};

export default Cart;

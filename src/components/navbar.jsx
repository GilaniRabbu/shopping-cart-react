import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, UserCircleGear } from "phosphor-react";

const Navbar = () => {
  return (
    <div className="navbar w-full h-20 bg-gray-900 flex items-center justify-end">
      <div className="links flex items-center mr-10">
        <Link
          to="/"
          className="text-gray-100 no-underline ml-5 text-2xl hover:text-gray-300"
        >
          Shop
        </Link>

        <Link
          to="/cart"
          className="text-gray-100 no-underline ml-5 text-2xl hover:text-gray-300"
        >
          <ShoppingCart size={32} />
        </Link>

        <Link
          to="/about"
          className="text-gray-100 no-underline ml-5 text-2xl hover:text-gray-300"
        >
          <UserCircleGear size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

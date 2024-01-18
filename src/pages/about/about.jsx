import React from "react";
import Logo from "./logo.png";

const About = () => {
  return (
    <div className="text-center">
      <img src={Logo} className="w-80 mx-auto mb-4" />
      <p className="md:text-2xl text-xl font-bold text-gray-900 mb-4">
        Swift Cart: Shop fast, checkout faster.
      </p>
      <p className="text-gray-900 font-semibold px-2 max-w-[500px] mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ipsam
        expedita repudiandae ipsa consequatur aliquid fugiat obcaecati! Nostrum
        aliquid architecto, magnam possimus debitis at quod eius a inventore
        iste, veniam non error deleniti Esse similique, cumque error praesentium
        voluptatum at deleniti, non beatae, animi cupiditate perspiciatis
        quaerat excepturi.
      </p>
    </div>
  );
};

export default About;

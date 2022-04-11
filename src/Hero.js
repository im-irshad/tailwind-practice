import React from "react";
import hero from "./images/hero.svg";

function Hero() {
  return (
    <div className="md:flex md:flex-row mt-20 ">
      <div className="md:w-2/5 flex flex-col justify-center items-center">
        <h2 className="font-serif text-5xl text-gray-800 mb-4 text-center ">
          Welcome to E-shop
        </h2>
        <p className="uppercase text-gray-800 tracking-wide text-center">
          Biggest Food Collection
        </p>
        <p className="uppercase text-gray-800 tracking-wide text-center">
          Reasonable Price & Excelent Quality
        </p>
        <a
          href="/"
          className="text-xl text-red-50   uppercase bg-gradient-to-r from-red-600 to-blue-600 py-4  rounded-full px-8"
        >
          Shop Now
        </a>
      </div>
      <div className="w-3/5 ">
        <img src={hero} alt="hero" className="w-full" />
      </div>
    </div>
  );
}

export default Hero;

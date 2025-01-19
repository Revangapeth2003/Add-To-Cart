import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="container bg-slate-400 flex justify-between px-10 py-4 max-w-full">
      <div className="">
        <h1>AddToCart</h1>
      </div>
      <div>
        <ul className="align-center flex ">
          <Link to={"/"}>
            <li className="mr-8">Home</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

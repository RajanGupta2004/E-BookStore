import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-200 h-12 flex justify-between items-center w-full px-10 fixed top-0  ">
      <Link to="/" className="">
        {" "}
        <h1 className="font-bold cursor-pointer  ">BOOKSTORE</h1>
      </Link>
      <div className="flex justify-between gap-5 ">
        <Link
          to="/"
          className="cursor-pointer font-semibold hover:text-red-600"
        >
          Home
        </Link>
        <Link
          to="/favourites"
          className="cursor-pointer font-semibold hover:text-red-600 "
        >
          Favourite
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

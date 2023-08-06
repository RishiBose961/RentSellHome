import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-16 w-full">
      <div className="flex justify-between pt-4  max-w-7xl mx-auto px-3 mb-3">
        <Link to="/">
          <div className=" inline-flex space-x-2">
            <img src="/Larkef.png" alt="loading" className="h-10" />
            <p className="text-xl font-bold font-mono pt-1">Rent + Sell</p>
          </div>
        </Link>
        <div>
          <p className="pt-1">Login</p>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FiHome } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { MdCreate } from "react-icons/md";
import { GrUserAdmin, GrUserExpert } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  const user = true;
  return (
    <div className="fixed bottom-0 z-20 bg-white w-full">
      <div className="flex justify-around items-center h-8">
        <div>
          <Link to="/">
            <FiHome className="text-xl cursor-pointer" />
          </Link>
        </div>
        <div>
          <GoHeart className="text-xl cursor-pointer" />
        </div>
        <div>
          <Link to="/new">
            <MdCreate className="text-xl cursor-pointer" />
          </Link>
        </div>
        <div>
          {user ? (
            <Link to="/profile">
              <GrUserExpert className="text-xl cursor-pointer" />
            </Link>
          ) : (
            <GrUserAdmin className="text-xl cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;

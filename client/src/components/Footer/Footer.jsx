import React from "react";
import { FiHome } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { MdCreate } from "react-icons/md";
import { GrUserAdmin, GrUserExpert } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const { userInfo } = useSelector((state) => state.auth);
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
          {userInfo ? (
            <Link to="/profile">
              <GrUserExpert className="text-xl cursor-pointer" />
            </Link>
          ) : (
            <Link to="/login">
            <GrUserAdmin className="text-xl cursor-pointer" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;

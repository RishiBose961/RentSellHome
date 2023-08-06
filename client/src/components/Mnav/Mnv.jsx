import React from "react";
import { AiFillEdit, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Mnv = () => {
  return (
    <div className="flex justify-end space-x-4 mx-4">
      <div>
      <Link to='/search'>
        <button
          className="bg-gradient-to-r from-purple-500 to-blue-500 h-10
         w-10 font-semibold text-white rounded-full"
        >
          <AiOutlineSearch className=" text-center text-2xl ml-2" />
        </button>
        </Link>
      </div>
      <div>
        <Link to='/new'>
        <button
          className="bg-gradient-to-r from-emerald-500 to-blue-500 w-10 h-10
         font-semibold text-white rounded-full"
        >
          <AiFillEdit className=" text-center text-2xl ml-2" />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Mnv;

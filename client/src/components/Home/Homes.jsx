import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import HomeRent from "../HomeRent/HomeRent";
import HomeSell from "../HomeSell/HomeSell";
import Mnv from "../Mnav/Mnv";

const Homes = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid  grid-cols-1 lg:grid-cols-2">
        <div className="mt-10 lg:mt-32 text-center">
          <div className=" inline-flex">
            <h1
              class="font-extrabold text-transparent text-6xl lg:text-8xl
             bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500  "
            >
              Find Home
            </h1>

            <FaLocationDot className="text-6xl lg:text-8xl text-emerald-400 animate-bounce" />
          </div>

          <p className="text-4xl font-bold font-mono ml-2 pt-6">Rent + Sell</p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://global-uploads.webflow.com/5dd3495558fd7f3d1fcb52bc/5f900b8d8e4a714a2a26e8fa_new%203.2.svg"
            alt="loading"
            loading="lazy"
            className="w-[495px] h-[495px]"
          />
        </div>
      </div>
      <Mnv />
      <HomeRent />
      <HomeSell />
      {/* <div className="grid  grid-cols-1 lg:grid-cols-2">
      <div>
          <img
            src="https://global-uploads.webflow.com/5dd3495558fd7f3d1fcb52bc/5f8d59eb4f0e8d45e9d8ea1b_(3.3)%20%5BSECTION%20-%20It%20doesn%27t%20have%20to%20be%20that%20way%5D%20Communication%20-%20Illustrations%20v2.svg"
            alt="loading"
            loading="lazy"
            className="w-[495px] h-[495px]"
          />

        </div>
        <div className="mt-10 lg:mt-32 text-center">
        
        </div>
        
      </div> */}
    </div>
  );
};

export default Homes;

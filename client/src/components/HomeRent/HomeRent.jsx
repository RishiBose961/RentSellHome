import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GoHeart } from "react-icons/go";
const HomeRent = () => {
  const data = [0, 1, 2, 3, 4, 5, 6];
  return (
    <>
      <p className=" font-mono italic text-2xl font-semibold pt-3 pb-3 mx-3">
        Rent Home
      </p>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide>
            <div className=" h-80 rounded-2xl shadow-lg shadow-black opacity-70 mx-3 mb-5">
              <div>
                <img
                  src="https://images.pexels.com/photos/17539759/pexels-photo-17539759/free-photo-of-van.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="image"
                  className="w-full rounded-t-2xl h-48"
                />
                <div className="flex justify-between mx-3 pt-4">
                  <p className="text-md font-semibold">Thank you for reading, and let's connect!..</p>
                  <GoHeart className="text-xl h-7 w-7 cursor-pointer" title="Like" />
                </div>
                <div className="flex justify-between mx-3 space-x-3 pt-4">
                  <p className="text-2xl font-semibold">$4900</p>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 w-32 font-semibold text-white rounded-full">Rent</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeRent;

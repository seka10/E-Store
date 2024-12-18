import React from "react";
import BannerImage from "../../assets/Thumbnails/women6.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="gird grid-cols-1 sm:grid-cols-2 items-center gap-6">
          {/* image selction */}
          <div data-aos="zoom in" className="">
            <img
              src={BannerImage}
              alt=""
              className="max-w-[400px] h-[350px] w-full mt-10 mx-auto drop-shadow-[-5px_5px_10px_rgba(0,0,0,1)] object-cover hover:scale-105 translate-all duration-300 hover:drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] "
            />
          </div>
          {/* detalis section */}
          <div className="flex flex-col gap-6 justify-center sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold mt-10">
              Winter sale up to 50% Off
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              pariatur minus autem obcaecati cum deleniti in ipsa dicta animi.
              Aut labore iste culpa repellendus harum ex accusantium non est
              velit!
            </p>
            <div className="flex flex-col gap-4">
                <div data-aos="fade-up" className="flex items-center gap-4">
                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-500"/>
                    <p>Quality Products </p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                    <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-200 dark:bg-green-600" />
                    <p>Fast Delivary</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-600"/>
                    <p>Easy Pay method </p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                    <BiSolidOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-pink-200 dark:bg-pink-500" />
                    <p>Get more Offers</p>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

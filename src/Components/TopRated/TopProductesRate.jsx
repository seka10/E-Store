import React from "react";
import imag1 from "../../assets/Shirts/shirt.png";
import imag2 from "../../assets/Shirts/shirt2.png";
import imag3 from "../../assets/Shirts/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: imag1,
    title: "Casual Wear",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, amet eligendi. Expedita, accusamus, ipsum recusandae doloremque cum provident error eligendi illo, consectetur optio cupiditate voluptatum reprehenderit laboriosam aperiam a natus!",
  },
  {
    id: 2,
    img: imag2,
    title: "Printed T-shirts",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, amet eligendi. Expedita, accusamus, ipsum recusandae doloremque cum provident error eligendi illo, consectetur optio cupiditate voluptatum reprehenderit laboriosam aperiam a natus!",
  },
  {
    id: 3,
    img: imag3,
    title: "Women's Dresses",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, amet eligendi. Expedita, accusamus, ipsum recusandae doloremque cum provident error eligendi illo, consectetur optio cupiditate voluptatum reprehenderit laboriosam aperiam a natus!",
  },
];

const TopProductsRate = () => {
  return (
    <div className="container mx-auto py-8"
         data-aos="zoom in"
    >
      {/* Header Section */}
      <div className="text-center justify-center mb-10">
        <p data-aos="fade-up" className="text-sm text-primary">
          Top Rated Products
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Best Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Discover our top-rated products that our customers love!
        </p>
      </div>

      {/* Body Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {ProductsData.map((data) => (
          <div 
            key={data.id}
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
  
          >
            {/* Image Section */}
            <div className="h-[150px] flex items-center justify-center overflow-hidden">
              <img
                src={data.img}
                alt={data.title}
                className="max-w-[140px] transform group-hover:scale-105 duration-300"
              />
            </div>

            {/* Details Section */}
            <div className="p-4 text-center">
              {/* Star Rating */}
              <div className="w-full flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
              <h1 className="text-xl font-bold mb-2 dark:text-gray-300">{data.title}</h1>
              <p className="text-gray-600 group-hover:text-white duration-200 text-sm line-clamp-2">
                {data.discription}
              </p>
              <button
                className="bg-primary hover:scale-110 duration-200 text-white py-2 px-6 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProductsRate;

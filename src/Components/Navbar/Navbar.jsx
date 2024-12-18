import React from "react";
import Logo from "../../assets/Logo.png";
import { FaCartShopping, FaSearchengin } from "react-icons/fa6";
import { FaAngleDoubleDown } from "react-icons/fa";
// @ts-ignore
import DarkMode from "./DarkMode";
const menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#Services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Men Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electroncals",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Chosen For You ❤",
    link: "/#",
  },
];
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-600 text-black dark:text-black duration-200 fixed top-0 left-0 w-full z-40">
      {/* Upper navbar */}
      <div className="bg-primary dark:bg-gray-500 py-2.5">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10 transition-all duration-500 hover:scale-125 " />
              <span className="ml-2 text-white dark:text-black">Shopiby</span>
            </a>
          </div>
          {/* Search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] 
                transition-all duration-300 rounded-full 
                border border-gray-300 px-2 py-1 
                focus:outline-none focus:border-2 focus:border-primary"
              />
              <FaSearchengin className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* Button for order */}
            <button
              onClick={() => alert("Sorry but the Order not available Yet!")}
              className="bg-orange-400 hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all 
              duration-700 ease-in-out text-white py-1 px-4 rounded-full flex items-center gap-3 group transform scale-75 hover:scale-105 
              dark:bg-gray-700 dark:hover:bg-gradient-to-l dark:hover:from-primary dark:hover:to-secondary dark:text-black dark:hover:scale-95"
            >
              <span className="group-hover:translate-y-0 group-hover:opacity-100 transform -translate-y-4 opacity-0 transition-all duration-500">
                order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Dark mode button switcher */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Lower navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center">
          {menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple dropdown and links */}
          <li className="relative group">
            <a href="#" className="flex items-center gap-[2px] py-2 ">
              Trending Items
              <FaAngleDoubleDown className="w-2.5 h-2.5 m-1 bottom-2 transition-all duration-200 group-hover:rotate-180 flex justify-center mt-2 " />
            </a>
            <div className="absolute hidden group-hover:block bg-white dark:bg-gray-700 shadow-md mt-1 z-10 p-2 text-xs w-40 rounded-[20px] ">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="block px-4 py-2 hover:bg-primary hover:text-white duration-200 rounded-full"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

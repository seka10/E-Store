import React from "react";
import img1 from"../../assets/Thumbnails/women10.jpg";
import img2 from"../../assets/Thumbnails/women9.jpg";
import img3 from"../../assets/Thumbnails/women7.jpg";
import img4 from"../../assets/Thumbnails/women12.jpg";
import img5 from"../../assets/Thumbnails/women11.jpg";
import img6 from"../../assets/Thumbnails/women8.jpg";
import img7 from"../../assets/Thumbnails/women13.jpg";
import img8 from"../../assets/Thumbnails/women14.jpg";
import img9 from"../../assets/Thumbnails/women15.jpg";
import img10 from"../../assets/Thumbnails/women16.jpg";
import { FaStar } from "react-icons/fa";
const ProductsData=[
    {
        id:1,
        img:img1,
        title:"Sun Glasses",
        rating:"4.8",
        author:"Salma Nader",
        aosdelay:"200",
    },
    {
        id:2,
        img: img2,
        title:"Necklace",
        rating:"4.6",
        author:"Nada Mohamed",
        aosdelay:"400",
    },
    {
        id:3,
        img:img3,
        title:"Shirts",
        rating:"4.1",
        author:"Assel .D Majeds",
        aosdelay:"600",
    },
    {
        id:4,
        img:img4,
        title:"Shoses",
        rating:"4.5",
        author:"Rana Ahmed ",
        aosdelay:"800",
    },
    {
        id:5,
        img:img5,
        title:"Socks",
        rating:"4.9",
        author:"Shaymaa Fares",
        aosdelay:"1100",
    },
    {
        id:6,
        img:img6,
        title:"Pants",
        rating:"4.4",
        author:"Mayada Mahmoud",
        aosdelay:"1200",
    },
    {
        id:7,
        img:img7,
        title:"Skin Care",
        rating:"5.0",
        author:"Basma Alaa",
        aosdelay:"1300",
    },
    {
        id:8,
        img:img8,
        title:"Skirts",
        rating:"4.2",
        author:"Menna Reda",
        aosdelay:"1400",
    }, {
        id:9,
        img:img9,
        title:"Hand Bags",
        rating:"4.7",
        author:"Huda Fathi",
        aosdelay:"1500",
    }, {
        id:10,
        img:img10,
        title:"Jackets",
        rating:"4.3",
        author:"Farida Hosny",
        aosdelay:"1600",
    },

];
const Clone = () => {
    return(
        <div className="mt-14 mb-12">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p  data-aos="fade-up" className="text-sm text-primary">Top Rating</p>
                    <h1  data-aos="fade-up" className="text-3xl font-bold">Chosen Products</h1>
                    <p  data-aos="fade-up" className="text-xs text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, doloribus eligendi? Aliquid mollitia enim eius deserunt neque voluptatibus accusantium soluta velit omnis accusamus! Dolorem laboriosam, officia excepturi minima quisquam dolor.
                    </p>
                </div>
                {/* Body Section */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 text-center items-center justify-center">
                        {/* Card Section */}
                        {ProductsData.map((data) => (
                            <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosdelay}
                            key={data.id} className="space-y-3 ">
                                <img src={data.img} alt={data.title} className="h-[220px] w-[150px] object-cover rounded-md hover:scale-110 translate-all duration-500 hover:cursor-pointer hover:w-[350px]" />
                            <div className="">
                                <h3 className="font-semibold">{data.title}</h3>
                                <p className="text-sm text-gray-600">{data.author}</p>
                                <div className="flex item-center gap-1 text-center items-center justify-center">
                                <FaStar className="text-yellow-400"/>
                                <span>{data.rating}</span> 
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                    {/* view all buttins */}
                    <div data-aos="fade-up"
                    className="flex justify-center">
                        <button className="text-center mt-10 cursor-pointer text-white bg-primary py-1 px-5 rounded-md hover:scale-125 duration-300 translate-all">
                        view all buttins
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

 
export default Clone;
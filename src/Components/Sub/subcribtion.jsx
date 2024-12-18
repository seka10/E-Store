import React from "react";
import Pattern from "../../assets/Shirts/pattern.jpg";

const Subscription = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 mt-10 bg-gray-100 dark:bg-gray-800 text-white"
      style={{
        backgroundImage: `url(${Pattern})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="text-center sm:text-left max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-4xl font-semibold mb-4">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter Your Mail "
            className="w-full p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
 
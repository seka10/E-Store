import React from "react";
import image1 from "../../assets/testModels/women.png";
import image2 from "../../assets/testModels/testimonial-image01.jpg";
import image3 from "../../assets/testModels/testimonial-image03.jpg";
import image4 from "../../assets/testModels/shopping.png";
import image5 from "../../assets/testModels/testimonial-image04.jpg";
import image6 from "../../assets/testModels/sale.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  const ImageList = [
    {
      id: 1,
      img: image1,
      title: "Up To 50% off on all Women's Wear",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, amet eligendi. Expedita, accusamus, ipsum recusandae doloremque cum provident error eligendi illo, consectetur optio cupiditate voluptatum reprehenderit laboriosam aperiam a natus!",
    },
    {
      id: 2,
      img: image2,
      title: "Up To 40% off on all Men's Wear",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, amet eligendi. Expedita, accusamus, ipsum recusandae doloremque cum provident error eligendi illo, consectetur optio cupiditate voluptatum reprehenderit laboriosam aperiam a natus!",
    },
    {
      id: 3,
      img: image3,
      title: "Up To 60% off on all Kid's Wear",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, amet eligendi. Expedita, accusamus, ipsum recusandae doloremque cum provident error eligendi illo, consectetur optio cupiditate voluptatum reprehenderit laboriosam aperiam a natus!",
    },
    {
      id: 4,
      img: image4,
      title: "Up To 30% off on all Prodacts Sales",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, amet eligendi. Expedita, accusamus, ipsum recusandae doloremque cum provident error eligendi illo, consectetur optio cupiditate voluptatum reprehenderit laboriosam aperiam a natus!",
    },
    {
      id: 5,
      img: image5,
      title: "Up To 10% off on all Electronicals",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, amet eligendi. Expedita, accusamus, ipsum recusandae doloremque cum provident error eligendi illo, consectetur optio cupiditate voluptatum reprehenderit laboriosam aperiam a natus!",
    },
    {
      id: 6,
      img: image6,
      title: "Up To 70% off on all Electronicals",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, amet eligendi. Expedita, accusamus, ipsum recusandae doloremque cum provident error eligendi illo, consectetur optio cupiditate voluptatum reprehenderit laboriosam aperiam a natus!",
    },
  ];
  return (
    <div className="relative overflow-hidden h-[550px] min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/*background Pattern*/}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* Selections */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text content */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aso="zoom-in"
                    data-aso-once="true"
                    data-aso-duration="500"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold items-center justify-center text-center"
                  >
                    {data.title}
                    <p
                      data-aso="zoom-up"
                      data-aso-delay="100"
                      data-aso-duration="500"
                      className="text-sm items-center justify-center text-center"
                    >
                      {data.discription}
                      <br />
                      <div
                        data-aso="zoom-up"
                        data-aso-delay="100"
                        data-aso-duration="500"
                      >
                        <button className="bg-gradient-to-r from-primary to-secondary h-10 w-40 text-[20px] hover:scale-105 transition-transform duration-200 text-white py-2 px-4 rounded-full">
                          Order Now!
                        </button>
                      </div>
                    </p>
                  </h1>
                </div>
                {/* Image content */}
                <div className="order-2 sm:order-1">
                  <div
                    data-aso="zoom-in"
                    data-aso-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Hero;

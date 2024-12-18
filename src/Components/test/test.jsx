import React from "react";
import Slider from "react-slick";

const TestData = [
  {
    id: 1,
    name: "Aml Emad",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad est quidem nam facere, dolorem, vero distinctio reiciendis id ipsum magnam odit aliquam in, necessitatibus obcaecati possimus architecto. Reprehenderit, veritatis maiores",
    img: "https://img.freepik.com/free-photo/full-length-portrait-happy-excited-girl-bright-colorful-clothes-holding-shopping-bags-while-standing-showing-peace-gesture-isolated_231208-5946.jpg?t=st=1734278953~exp=1734282553~hmac=973916b41a452ccfde4482d920ae7faa5f57ce56b9639b9f32f8fb5e5a8c2ee4&w=1380",
  },
  {
    id: 2,
    name: "Sara Adly",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad est quidem nam facere, dolorem, vero distinctio reiciendis id ipsum magnam odit aliquam in, necessitatibus obcaecati possimus architecto. Reprehenderit, veritatis maiores",
    img: "https://img.freepik.com/free-photo/thoughtful-young-beautiful-girl-holding-shopping-bags-looking-right-side-with-finger-cheek-isolated-white-wall_141793-79128.jpg?t=st=1734278532~exp=1734282132~hmac=593055c9b41dbad987c32f862f3b63e2486233c35e71fef6e7a2672203e34ed1&w=1380",
  },
  {
    id: 3,
    name: "Gana Ayman",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad est quidem nam facere, dolorem, vero distinctio reiciendis id ipsum magnam odit aliquam in, necessitatibus obcaecati possimus architecto. Reprehenderit, veritatis maiores",
    img: "https://img.freepik.com/free-photo/portrait-woman-dress-talking-mobile-phone_171337-6979.jpg?t=st=1734278579~exp=1734282179~hmac=91dde6f3c8a7b28c5006024d1a7f9a6ae1b84ee3bf728f660bb62376a08b1bf6&w=1380",
  },
  {
    id: 4,
    name: "Janna Wael",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad est quidem nam facere, dolorem, vero distinctio reiciendis id ipsum magnam odit aliquam in, necessitatibus obcaecati possimus architecto. Reprehenderit, veritatis maiores",
    img: "https://img.freepik.com/free-photo/smiling-young-woman-with-shopping-bags-against-purple-backdrop_23-2148101606.jpg?t=st=1734278730~exp=1734282330~hmac=7e438dea86fda9a88344096271109af7ae0eef54b4ebbe6b4ae4a4b3ff50b27a&w=1380",
  },
  {
    id: 5,
    name: "Farah Abdo",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad est quidem nam facere, dolorem, vero distinctio reiciendis id ipsum magnam odit aliquam in, necessitatibus obcaecati possimus architecto. Reprehenderit, veritatis maiores",
    img: "https://img.freepik.com/free-photo/young-lady-oversized-hoodie-pants-showing-giving-gesture-while-holding-packets-looking-happy-front-view_176474-58599.jpg?t=st=1734278732~exp=1734282332~hmac=1be120db556daccbed96d4b585616314d8db38a87a3dbf1b4a70febc396bd878&w=1380",
  },
  {
    id: 6,
    name: "Laila Ebrahim",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad est quidem nam facere, dolorem, vero distinctio reiciendis id ipsum magnam odit aliquam in, necessitatibus obcaecati possimus architecto. Reprehenderit, veritatis maiores",
    img: "https://img.freepik.com/free-photo/young-shopping-woman-smiling-wearing-hat-isolated-green-background_231208-4938.jpg?t=st=1734278826~exp=1734282426~hmac=5c8a9cd31dc495179da80bdd0117ebfe0e07a4d6ce802bd53c8b999bf13f00e5&w=1380",
  },
  {
    id: 7,
    name: "Basmala Farag",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad est quidem nam facere, dolorem, vero distinctio reiciendis id ipsum magnam odit aliquam in, necessitatibus obcaecati possimus architecto. Reprehenderit, veritatis maiores",
    img: "https://img.freepik.com/free-photo/pretty-woman-enjoys-successful-shopping-poses-with-bags-portrait-green-eyed-girl-with-crispy-lips-pink-background_197531-17591.jpg?t=st=1734278888~exp=1734282488~hmac=bf45ea8bfbd55419ce28f8d62f7470eb3d3b0fde9917f9e7d2766825caab2c65&w=1380",
  },
  {
    id: 8,
    name: "Nagwa Abdalla",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad est quidem nam facere, dolorem, vero distinctio reiciendis id ipsum magnam odit aliquam in, necessitatibus obcaecati possimus architecto. Reprehenderit, veritatis maiores",
    img: "https://img.freepik.com/free-photo/stylish-red-haired-woman-with-white-shopping-bags-posing-pink-lien-dress-with-sleeves-pink-wall_273443-4465.jpg?t=st=1734279111~exp=1734282711~hmac=2af9169d5dc29dd94939928176688893a0d425dca10c91fe0bb9cab119bdeec0&w=1380",
  },
  {
    id: 9,
    name: "Dalia Bassam",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad est quidem nam facere, dolorem, vero distinctio reiciendis id ipsum magnam odit aliquam in, necessitatibus obcaecati possimus architecto. Reprehenderit, veritatis maiores",
    img: "https://img.freepik.com/free-photo/photo-pretty-young-woman-posing-with-shopping-bags_114579-64193.jpg?t=st=1734279111~exp=1734282711~hmac=63d1574897907e6a623950453325852dc3985e2df4122b7e2867ddd2b42ca96f&w=1380",
  },
  {
    id: 10,
    name: "Zena Hamada",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad est quidem nam facere, dolorem, vero distinctio reiciendis id ipsum magnam odit aliquam in, necessitatibus obcaecati possimus architecto. Reprehenderit, veritatis maiores",
    img: "https://img.freepik.com/free-photo/front-view-young-female-student-red-shirt-black-bag-smiling-holding-shopping-packages-white_140725-16639.jpg?t=st=1734279112~exp=1734282712~hmac=4ec6c9e23644160815e831102a4f586fe9c4d19880f1eac374b9a3aa15d85ea5&w=1380",
  },
];

const Test = () => {
  const setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div data-aos="fade-up"
         className="mb-10 text-center">
          <p>What Our Customers Saying</p>
          <h1 className="text-primary font-bold scale-150">Testimonials</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            doloribus eligendi? Aliquid mollitia enim eius deserunt neque
            voluptatibus accusantium soluta velit omnis accusamus! Dolorem
            laboriosam, officia excepturi minima quisquam dolor.
          </p>
        </div>
        {/* Test cards */}
        <div data-aos="fade-up">
          <Slider {...setting}>
            {TestData.map((data) => (
              <div
                key={data.id}
                className="text-center p-5 flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:drop-shadow-xl dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary dark:hover:text-white relative shadow-xl hover:rounded-lg"
              >
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 mx-auto hover:scale-110 translate-all duration-500"
                />
                <p className="text-lg dark:text-white leading-relaxed mb-2">
                  {data.name}
                </p>
                <h3 className="text-xl text-black dark:text-white font-bold">
                  {data.text}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Test;

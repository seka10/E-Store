import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import TopProductsRate from "./Components/TopRated/TopProductesRate";
import Banner from "./Components/Banner/Banner";
import Subscription from "./Components/Sub/subcribtion";
import Clone from "./Components/clone/Clone";
import Test from "./Components/test/test";
import Footer from "./Components/Footer/Footer";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 200,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-500">
      <Navbar />
      <Hero />
      <Products />
      <TopProductsRate />
      <Banner />
      <Subscription />
      <Clone />
      <Test />
      <Footer />
    </div>
  );
};

export default App;

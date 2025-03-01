import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Logo from "../../assets/Logo.png";
import FooterPattern from "../../assets/footer-pattern.jpg";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
  FaGithub,
  FaLocationArrow,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${FooterPattern})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  maxHeight: "100vh",
  backgroundAttachment: "fixed",
};

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "Contact", link: "/#Contact" },
  { title: "About", link: "/#About" },
  { title: "Blog", link: "/#Blog" },
  { title: "More Info", link: "/#More Info" },
];

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div style={BannerImg} className="text-white mt-1">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-10 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify items-center mb-3 gap-3 flex">
              <img
                src={Logo}
                alt=""
                className="max-w-[50px] hover:scale-150 transition-all duration-500 cursor-pointer"
              />
              Shopiby
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum, cumque eos vero tempora assumenda quisquam saepe reprehenderit rerum consequatur dolores alias explicabo. Repellat ex eos sit ducimus, id aut!
            </p>
            <hr />
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow className="transition-all duration-500 hover:scale-150" />
              <p className="relative hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                Dammitta, Egypt
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 col-span-2 md:pl-10">
            <div className="w-full">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((links) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={links.title}
                  >
                    <span>{links.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                 Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((links) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={links.title}
                  >
                    <span>{links.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 items-center mb-6">
            <a
              className="transition-all duration-500 hover:scale-150"
              href="https://www.instagram.com/Sayed_X_ayman"
              aria-label="Instagram"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              className="transition-all duration-500 hover:scale-150"
              href="https://www.facebook.com/profile.php?id=100014948612662&mibextid=ZbWKwL"
              aria-label="Facebook"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              className="transition-all duration-500 hover:scale-150"
              href="https://linkedin.com/in/xseka10x"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              className="transition-all duration-500 hover:scale-150"
              href="https://api.whatsapp.com/send/?phone=201095463272"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-3xl" />
            </a>
            <a
              className="transition-all duration-500 hover:scale-150"
              href="https://x.com/sayedayman92?mx=2"
              aria-label="X Twitter"
            >
              <FaTwitter className="text-3xl" />
            </a>
            <a
              className="transition-all duration-500 hover:scale-150"
              href="https://github.com/seka10"
              aria-label="GitHub"
            >
              <FaGithub className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

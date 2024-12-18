import React, { useEffect } from "react";
import darkmodebtn from "../../assets/WebSite/darkmode1.png";
import lightmodebtn from "../../assets/WebSite/lightmode.png";
const DarkMode = () => {
  const getInitialTheme = () => {
    if (typeof window !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return "light";
  };

  const [theme, setTheme] = React.useState(getInitialTheme());
  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={darkmodebtn}
        alt="dark mode button"
        onClick={() => setTheme("dark")}
        className={`w-12 cursor-pointer transition-all duration-200 ${theme === "dark" ? "hidden" : ""}`}
      />
      <img
        src={lightmodebtn}
        alt="light mode button"
        onClick={() => setTheme("light")}
        className={`w-12 cursor-pointer  transition-all duration-200 ${theme === "light" ? "hidden" : ""}`}
      />
    </div>
  );
};

export default DarkMode;

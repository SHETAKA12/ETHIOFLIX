import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillSun } from "react-icons/ai";
import { useState, useEffect } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const element = document.documentElement;

  useEffect(() => {
    if(theme === "dark"){
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else{
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
  }, [element.classList, theme]);


  return (
    <div className="relative">
        <AiFillSun 
            onClick={() => setTheme(theme === "light" ? "dark" : "light" )}
            title="Light Mode" 
            className={`text-[1.8rem] cursor-pointer transition-all absolute right-0 z-10 duration-300 ${theme === "light" ? "opacity-0" : "opacity-100"}`}/>
        <BsFillMoonStarsFill 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark" )}
            title="Dark Mode" 
            className={`text-[1.5rem] cursor-pointer transition-all duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}/>
    </div>
  )
}

export default DarkMode
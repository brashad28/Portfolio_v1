import React, { useEffect, useState } from "react";
import "./navBar.css";

function NavBar() {
  const navList = ["Non-Digital Art", "About Me", "Contact Me"];

  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 950) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`NavBar-container ${show && "nav_black"}`}>
      <div className="nav">
        {navList.slice(0, 2).map((items) => (
          <div>{items}</div>
        ))}
      </div>
      <div className="nav">
        {navList.slice(2, 4).map((items) => (
          <div>{items}</div>
        ))}
        <button>Projects</button>
      </div>
    </div>
  );
}

export default NavBar;

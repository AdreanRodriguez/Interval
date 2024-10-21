import "./menu.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoBlack from "../../assets/logo-black.svg";
import logowhite from "../../assets/logo-white.svg";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
    const menuSection = document.querySelector(".menu__section");
    const menuLogo = document.querySelector(".menu__logo");

    if (!isMenuOpen) {
      menuSection.classList.add("open");
      menuLogo.classList.add("rotate-right");
      menuLogo.classList.remove("rotate-left");
    } else {
      menuSection.classList.remove("open");
      menuLogo.classList.add("rotate-left");
      menuLogo.classList.remove("rotate-right");
    }
  }

  return (
    <>
      <img
        className="menu__logo"
        src={isMenuOpen ? logowhite : logoBlack}
        alt="Logo"
        onClick={handleMenuClick}
      />
      <menu className="menu__section">
        <Link className="menu__link" to="/analogTimer">
          <motion.p
            key={isMenuOpen ? "open" : "close"}
            className="menu__text"
            initial={{ opacity: 0, translateX: "-100%" }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.5 }}
          >
            Analog timer
          </motion.p>
        </Link>
        <Link className="menu__link" to="/digitalTimer">
          <motion.p
            key={isMenuOpen ? "open" : "close"}
            className="menu__text"
            initial={{ opacity: 0, translateX: "-100%" }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.7 }}
          >
            Digital timer
          </motion.p>
        </Link>
        <Link className="menu__link" to="/textTimer">
          <motion.p
            key={isMenuOpen ? "open" : "close"}
            className="menu__text"
            initial={{ opacity: 0, translateX: "-100%" }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 1 }}
          >
            Text timer
          </motion.p>
        </Link>
      </menu>
    </>
  );
}

export default Menu;

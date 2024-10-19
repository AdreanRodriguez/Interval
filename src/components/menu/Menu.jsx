import "./menu.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoBlack from "../../assets/logo-black.svg";
import logowhite from "../../assets/logo-white.svg";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
    const menuSection = document.querySelector(".menu__section");

    if (!isMenuOpen) {
      menuSection.classList.add("open");
    } else {
      menuSection.classList.remove("open");
    }
  }

  return (
    <>
      <img
        className="menu"
        src={isMenuOpen ? logowhite : logoBlack}
        alt="Logo"
        onClick={handleMenuClick}
      />
      <menu className="menu__section">
        <Link className="menu__link" to="/analogTimer">
          <p className="menu__text">Analog timer</p>
        </Link>
        <Link className="menu__link" to="/digitalTimer">
          <p className="menu__text">Digital timer</p>
        </Link>
        <Link className="menu__link" to="/textTimer">
          <p className="menu__text">Text timer</p>
        </Link>
      </menu>
    </>
  );
}

export default Menu;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container"></div>
        <Link to="/" className="navbar-logo">
          <img src={require("../images/starwarslogo2.avif")} alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMenu}>
              Home
            </Link>
            <li className="nav-item" />
            <Link to="quiz" className="nav-links" onClick={closeMenu}>
              Character Quiz
            </Link>
            <li className="nav-item" />
            <Link to="lightsaber" className="nav-links" onClick={closeMenu}>
              Lightsaber Duel
            </Link>
            <li className="nav-item" />
            <Link to="soundboard" className="nav-links" onClick={closeMenu}>
              SoundBoard
            </Link>
            <li className="nav-item" />
            <Link to="translator" className="nav-links" onClick={closeMenu}>
              Galactic Translator
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </nav>
    </>
  );
}

export default Navbar;

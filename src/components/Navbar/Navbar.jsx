import { useState } from "react";
import images from "../../constants/images";
import { VscGrabber } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import MenuToggle from "../MenuToggle/MenuToggle";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="menu" id="home">
      <div className="logo">
        <Link to="/#home">
          <img src={images.logo} alt="Logo Alberto de los Rios" />
        </Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isExpanded ? (
          <VscChromeClose className="menu-icon" />
        ) : (
          <VscGrabber className="menu-icon" />
        )}
      </div>

      {isExpanded ? (
        <MenuToggle isExpanded={isExpanded} toggleMenu={toggleMenu} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;

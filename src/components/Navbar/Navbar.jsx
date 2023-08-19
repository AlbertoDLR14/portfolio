import { useState } from "react";
import images from "../../constants/images";
import "./navbar.css";
import { VscGrabber } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import MenuToggle from "../MenuToggle/MenuToggle";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="menu main-content" id="inicio">
      <div className="logo">
        <a href="#inicio">
          <img src={images.logo} alt="Logo Alberto de los Rios" />
        </a>
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

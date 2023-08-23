import "./menutoggle.css";
import Enlaces from "../Enlaces/Enlaces";

// eslint-disable-next-line react/prop-types
const MenuToggle = ({ isExpanded, toggleMenu }) => {
  return (
    <nav className={`menu-nav`}>
      <ul>
        <li>
          <Enlaces
            direccion="/#home"
            clase="menu-link"
            text="Inicio"
            isExpanded={isExpanded}
            toggleMenu={toggleMenu}
          />
          <Enlaces
            direccion="/#aboutme"
            clase="menu-link"
            text="Sobre mí"
            isExpanded={isExpanded}
            toggleMenu={toggleMenu}
          />
          <Enlaces
            direccion="/#portfolio"
            clase="menu-link"
            text="Portfolio"
            isExpanded={isExpanded}
            toggleMenu={toggleMenu}
          />
          <Enlaces
            direccion="#contact"
            clase="menu-link"
            text="Contacto"
            isExpanded={isExpanded}
            toggleMenu={toggleMenu}
          />
        </li>
      </ul>
    </nav>
  );
};

export default MenuToggle;

import "./menutoggle.css";
import Enlaces from "../Enlaces/Enlaces";

// eslint-disable-next-line react/prop-types
const MenuToggle = ({ isExpanded, toggleMenu }) => {
  return (
    <nav className={`menu-nav`}>
      <ul>
        <li>
          <Enlaces
            direccion="/"
            clase="menu-link"
            text="Inicio"
            isExpanded={isExpanded}
            toggleMenu={toggleMenu}
          />
          <Enlaces
            direccion="/#sobremi"
            clase="menu-link"
            text="Sobre mí"
            isExpanded={isExpanded}
            toggleMenu={toggleMenu}
          />
          <Enlaces
            direccion="/#trabajos"
            clase="menu-link"
            text="Portfolio"
            isExpanded={isExpanded}
            toggleMenu={toggleMenu}
          />
          <Enlaces
            direccion="/#contacto"
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

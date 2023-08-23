import { data } from "../../constants";
import { Link } from "react-router-dom";
import "./herosection.css";

const HeroSection = () => {
  return (
    <div className="main-content padding-section">
      <div className="hero-section">
        <div className="hero-author">
          <p className="author">Alberto de los Ríos</p>
          <div className="separador" />
          <p className="puesto">{data.aboutMe.work}</p>
        </div>
        <div className="hero-description">
          <h1>
            Sumérgete en un mundo donde la creatividad abraza la tecnología. Mi
            pasión por el diseño y el desarrollo da vida a experiencias
            digitales cautivadoras. Descubre cómo llevar tu presencia visual al
            siguiente nivel.
          </h1>
        </div>
        <div className="hero-nav">
          <p>
            ¡Descubre mi{" "}
            <Link className="hero-enlace" to="#aboutme">
              historia
            </Link>
            ,{" "}
            <Link className="hero-enlace" to="#portfolio">
              mis trabajos
            </Link>{" "}
            o{" "}
            <Link className="hero-enlace" to="#contact">
              escríbeme
            </Link>{" "}
            para conocerme!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

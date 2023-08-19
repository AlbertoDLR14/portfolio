import "./herosection.css";
import { data } from "../../constants";

const HeroSection = () => {
  return (
    <div className="main-content">
      <div className="hero-section">
        <div
          className="hero-author"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1600"
        >
          <p className="author">Alberto de los Ríos</p>
          <div className="separador" />
          <p className="puesto">{data.aboutMe.work}</p>
        </div>
        <div
          className="hero-description"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1600"
        >
          <h1>
            Sumérgete en un mundo donde la creatividad abraza la tecnología. Mi
            pasión por el diseño y el desarrollo da vida a experiencias
            digitales cautivadoras. Descubre cómo llevar tu presencia visual al
            siguiente nivel.
          </h1>
        </div>
        <div
          className="hero-nav"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1600"
        >
          <p>
            ¡Descubre mi{" "}
            <a className="hero-enlace" href="#sobremi">
              historia
            </a>
            ,{" "}
            <a className="hero-enlace" href="#trabajos">
              mis trabajos
            </a>{" "}
            o{" "}
            <a className="hero-enlace" href="#contacto">
              escríbeme
            </a>{" "}
            para conocerme!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

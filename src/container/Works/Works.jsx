import AnimatedHR from "../../components/AnimatedHr/AnimatedHR";
import { VscAdd } from "react-icons/vsc";
import Destacados from "../../components/Destacados/Destacados";
import BottomMore from "../../components/BottomMore/BottomMore";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Tooltip } from "react-tooltip";
import "./works.css";

const Works = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#portfolio") {
      const sobremiElement = document.getElementById("portfolio");
      sobremiElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div id="portfolio">
      <div className="main-content">
        <div className="portfolio-enlace">
          <h2
            className="portfolio-title"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            {" "}
            Portfolio
          </h2>
          <Link
            to="/portfolio/trabajos"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-tooltip-id="tooltip-mas"
            data-tooltip-content="Ver más trabajos"
            data-tooltip-place="left"
          >
            <BottomMore icono={<VscAdd />} />
          </Link>
          <Tooltip id="tooltip-mas" />
        </div>
        <AnimatedHR />
        <Destacados />
      </div>
    </div>
  );
};

export default Works;

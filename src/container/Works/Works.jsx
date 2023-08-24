import AnimatedHR from "../../components/AnimatedHr/AnimatedHR";
import { VscAdd } from "react-icons/vsc";
import Destacados from "../../components/Destacados/Destacados";
import BottomMore from "../../components/BottomMore/BottomMore";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
            to="/trabajos"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            <BottomMore icono={<VscAdd />} />
          </Link>
        </div>
        <AnimatedHR />
        <Destacados />
      </div>
    </div>
  );
};

export default Works;

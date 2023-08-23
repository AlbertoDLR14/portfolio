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
    <div id="portfolio" className="main-content">
      <div
        className="portfolio-enlace"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1200"
      >
        <h2 className="portfolio-title"> Portfolio</h2>
        <Link to="/trabajos">
          <BottomMore icono={<VscAdd />} />
        </Link>
      </div>
      <AnimatedHR />
      <Destacados />
    </div>
  );
};

export default Works;

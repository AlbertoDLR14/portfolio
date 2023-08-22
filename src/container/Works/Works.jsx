import AnimatedHR from "../../components/AnimatedHr/AnimatedHR";
import { VscAdd } from "react-icons/vsc";
import Destacados from "../../components/Destacados/Destacados";
import BottomMore from "../../components/BottomMore/BottomMore";
import { Link } from "react-router-dom";
import "./works.css";

const Works = () => {
  return (
    <div id="trabajos" className="main-content">
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

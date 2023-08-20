import AnimatedHR from "../../components/AnimatedHr/AnimatedHR";
import { VscArrowDown } from "react-icons/vsc";
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
        <a className="enlace-trabajos" href="#">
          <VscArrowDown />
        </a>
      </div>
      <AnimatedHR />

      <div className="trabajos-destacados">asdasdas</div>
    </div>
  );
};

export default Works;

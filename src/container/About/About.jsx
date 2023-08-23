import AnimatedHR from "../../components/AnimatedHr/AnimatedHR";
import Preferencias from "../../components/Preferencias/Preferencias";
import Skills from "../../components/Skills/Skills";
import SobreMiFoto from "../../components/SobreMiFoto/SobreMiFoto";
import { data } from "../../constants";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./about.css";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#aboutme") {
      const sobremiElement = document.getElementById("aboutme");
      sobremiElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div id="aboutme" className="main-content">
      <div className="about">
        <h2
          className="hero-author"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
        >
          {" "}
          Sobre mí
        </h2>
        <AnimatedHR />
        <SobreMiFoto />
        <div className="cualidades">
          {data.qualities.map((cual, index) => {
            return (
              <Preferencias
                key={index}
                image={cual.imgUrl}
                title={cual.title}
                desc={cual.text}
              />
            );
          })}
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default About;

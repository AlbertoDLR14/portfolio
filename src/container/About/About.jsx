import AnimatedHR from "../../components/AnimatedHr/AnimatedHR";
import Preferencias from "../../components/Preferencias/Preferencias";
import Skills from "../../components/Skills/Skills";
import SobreMiFoto from "../../components/SobreMiFoto/SobreMiFoto";
import { data } from "../../constants";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Elipse from "../../components/Elipse/Elipse";
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
    <div id="aboutme" className="elipse-about">
      <Elipse
        widthElipse={1600}
        topElipse={50}
        leftElipse={0}
        topElipseImg={0}
        leftElipseImg={-1000}
      />
      <div className="about main-content">
        <h2
          className="hero-author"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
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
                index={index}
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

import AnimatedHR from "../AnimatedHr/AnimatedHR";
import data from "../../constants/data";
import DestacadosCard from "../DestacadosCard/DestacadosCard";
import { useEffect } from "react";
import "./vertrabajos.css";
import Elipse from "../Elipse/Elipse";

const VerTrabajos = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="portfolio main-content">
      <Elipse
        widthElipse={1200}
        topElipse={0}
        rightElipse={0}
        topElipseImg={-600}
        rightElipseImg={-600}
      />
      <h2
        className="portfolio-titulo"
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        Portfolio
      </h2>
      <AnimatedHR />
      <div className="portfolio-flex">
        {data.trabajos.map((destaca) => {
          return (
            <DestacadosCard
              key={destaca.id}
              id={destaca.id}
              titulo={destaca.titulo}
              habilidades={destaca.habilidades}
              imgDestacada={destaca.imagenes[0].url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VerTrabajos;

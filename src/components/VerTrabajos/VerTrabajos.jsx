import AnimatedHR from "../AnimatedHr/AnimatedHR";
import data from "../../constants/data";
import DestacadosCard from "../DestacadosCard/DestacadosCard";
import "./vertrabajos.css";

const VerTrabajos = () => {
  return (
    <div className="portfolio main-content">
      <h2 className="portfolio-titulo">Portfolio</h2>
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

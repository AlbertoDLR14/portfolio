import data from "../../constants/data";
import DestacadosCard from "../DestacadosCard/DestacadosCard";
import "./destacados.css";

const Destacados = () => {
  const idsSeleccionados = ["1", "2", "3"];
  const trabajosFiltrtados = data.trabajos.filter((item) =>
    idsSeleccionados.includes(item.id)
  );

  return (
    <div className="trabajos-destacados">
      {trabajosFiltrtados.map((destaca) => {
        return (
          <DestacadosCard
            key={destaca.id}
            titulo={destaca.titulo}
            habilidades={destaca.habilidades}
            descripcion={destaca.descripcion}
            imgDestacada={destaca.imgDestacada}
            imagenes={destaca.imagenes}
            url={destaca.url}
            urlGithub={destaca.urlGithub}
            urlBehance={destaca.urlBehance}
            urlAwwwards={destaca.urlAwwwards}
          />
        );
      })}
    </div>
  );
};

export default Destacados;

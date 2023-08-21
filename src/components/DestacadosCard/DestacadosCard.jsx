import "./destacadoscard.css";

const DestacadosCard = ({
  titulo,
  habilidades,
  descripcion,
  imgDestacada,
  imagenes,
  url,
  urlGithub,
  urlBehance,
  urlAwwwards,
}) => {
  return (
    <div className="card-destacados">
      <div className="destacados-img">
        <img src={imgDestacada} alt={titulo} />
      </div>
      <div className="destacados-texto">
        <p>{habilidades}</p>
        <h3>{titulo}</h3>
      </div>
    </div>
  );
};

export default DestacadosCard;

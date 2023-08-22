/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./destacadoscard.css";

const DestacadosCard = ({ id, titulo, habilidades, imgDestacada }) => {
  return (
    <Link to={`/trabajos/${id}`} className="card-destacados">
      <div className="destacados-img">
        <img src={imgDestacada} alt={titulo} />
      </div>
      <div className="destacados-texto">
        <h3>{titulo}</h3>
        <p>{habilidades}</p>
      </div>
    </Link>
  );
};

export default DestacadosCard;

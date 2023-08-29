import { useState } from "react";
import { Link } from "react-router-dom";
import { VscArrowRight } from "react-icons/vsc";
import "./destacadoscard.css";

// eslint-disable-next-line react/prop-types
const DestacadosCard = ({ id, titulo, habilidades, imgDestacada }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`/portfolio/trabajos/${id}`} className="card-destacados">
      <div
        className="destacados-img"
        style={{ position: "relative" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imgDestacada} alt={titulo} />
        {isHovered && (
          <div
            className="tooltip-img"
            style={{ left: position.x, top: position.y }}
          >
            <VscArrowRight />
          </div>
        )}
      </div>
      <div className="destacados-texto">
        <h3>{titulo}</h3>
        <p>{habilidades}</p>
      </div>
    </Link>
  );
};

export default DestacadosCard;

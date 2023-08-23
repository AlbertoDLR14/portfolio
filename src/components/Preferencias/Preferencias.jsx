/* eslint-disable react/prop-types */
import "./preferencias.css";

const Preferencias = ({ image, title, desc }) => {
  return (
    <div className="preferencia">
      <div className="preferencias-img">
        <img src={image} alt={title} />
      </div>
      <div className="preferencias-text">
        <h2 className="text-title">{title}</h2>
        <p className="text-desc">{desc}</p>
      </div>
    </div>
  );
};

export default Preferencias;

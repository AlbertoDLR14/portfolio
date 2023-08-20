/* eslint-disable react/prop-types */
import "./preferencias.css";

const Preferencias = ({ image, title, desc, delay }) => {
  return (
    <div
      className="preferencia"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="1200"
      data-aos-delay={delay}
    >
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

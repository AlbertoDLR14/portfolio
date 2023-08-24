/* eslint-disable react/prop-types */
import "./preferencias.css";

const Preferencias = ({ image, title, desc }) => {
  return (
    <div
      className="preferencia"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
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

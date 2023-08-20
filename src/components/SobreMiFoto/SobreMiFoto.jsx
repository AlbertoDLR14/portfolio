import { data } from "../../constants";
import images from "../../constants/images";
import "./sobremifoto.css";

const SobreMiFoto = () => {
  return (
    <div className="about-container">
      <div
        className="container-foto"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1200"
      >
        <img src={images.fotoPrueba} />
      </div>
      <div className="container-text">
        <div
          className="text-name"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1600"
          data-aos-delay="600"
        >
          <h2 className="name">Alberto</h2>
          <h2 className="apellido">de los Ríos</h2>
          <p className="puesto">{data.aboutMe.work}</p>
        </div>
        <div
          className="container-desc"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1600"
          data-aos-delay="800"
        >
          <p>{data.aboutMe.textProfile}</p>
        </div>
      </div>
    </div>
  );
};

export default SobreMiFoto;

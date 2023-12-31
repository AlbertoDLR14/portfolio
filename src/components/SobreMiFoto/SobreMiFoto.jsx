import { data } from "../../constants";
import images from "../../constants/images";
import { VscCloudDownload } from "react-icons/vsc";
import "./sobremifoto.css";
import BottomMore from "../BottomMore/BottomMore";

const SobreMiFoto = () => {
  return (
    <div className="about-container">
      <div
        className="container-foto"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        <img src={images.yo} />
      </div>
      <div className="container-text">
        <div
          className="text-name"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        >
          <h2 className="name">Alberto</h2>
          <h2 className="apellido">de los Ríos</h2>
          <p className="puesto">{data.aboutMe.work}</p>
          <a
            href="https://drive.google.com/file/d/1CC8TNY0O1LTvNCZ49HhSWjY5vI_UaaN5/view?usp=sharing"
            className="cv"
            target="_blank"
            rel="noreferrer"
          >
            <BottomMore icono={<VscCloudDownload />} texto="Currículum" />
          </a>
        </div>
        <div
          className="container-desc"
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        >
          <p>{data.aboutMe.textProfile}</p>
        </div>
      </div>
    </div>
  );
};

export default SobreMiFoto;

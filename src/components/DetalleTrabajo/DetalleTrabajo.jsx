import { Link, useParams } from "react-router-dom";
import data from "../../constants/data";
import Navbar from "../Navbar/Navbar";
import AnimatedHR from "../AnimatedHr/AnimatedHR";
import { VscArrowLeft, VscAdd } from "react-icons/vsc";
import BottomMore from "../BottomMore/BottomMore";
import { VscArrowRight } from "react-icons/vsc";
import Contact from "../../container/Contact/Contact";
import Footer from "../../container/Footer/Footer";
import { useEffect } from "react";
import Elipse from "../Elipse/Elipse";
import { Tooltip } from "react-tooltip";
import "./detalletrabajo.css";

const DetalleTrabajo = () => {
  const { trabajoId } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const trabajo = data.trabajos.find((item) => item.id === trabajoId);

  if (!trabajo) {
    return <div>Trabajo no encontrado</div>;
  }

  return (
    <>
      <Navbar />
      <div className="card-container main-content">
        <Elipse
          widthElipse={1200}
          topElipse={0}
          rightElipse={0}
          topElipseImg={-600}
          rightElipseImg={-600}
        />
        <div className="enlaces-work">
          <div
            className="contenedor-atras"
            data-tooltip-id="tooltip-mas-trabajo"
            data-tooltip-content="Ir atrás"
            data-tooltip-place="right"
          >
            <BottomMore icono={<VscArrowLeft />} atras="atras" />
          </div>
          <Tooltip id="tooltip-mas-trabajo" />
          <Link
            to="/portfolio/trabajos"
            data-tooltip-id="tooltip-mas-trabajo"
            data-tooltip-content="Ver más trabajos"
            data-tooltip-place="left"
          >
            <BottomMore icono={<VscAdd />} />
          </Link>
          <Tooltip id="tooltip-mas-trabajo" />
        </div>

        <AnimatedHR />

        <div
          className="card-title"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
        >
          <h2>{trabajo.titulo}</h2>
          <p>{trabajo.habilidades}</p>
        </div>

        <div className="card-description">
          <AnimatedHR />
          <div
            className="card-text"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            <p className="card-text-title">Descripción:</p>
            <p className="card-text-desc">{trabajo.descripcion}</p>
          </div>

          <div
            className="card-urls"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            {trabajo.urls.map((enlace, index) => {
              return enlace.url ? (
                <div key={index} className="card-urls-enlace">
                  <p className="card-urls-enlace-title">{enlace.nombre}</p>
                  <a
                    className="card-urls-enlace-url"
                    href={enlace.url}
                    target="_black"
                  >
                    <BottomMore icono={<VscArrowRight />} />
                  </a>
                </div>
              ) : null;
            })}
          </div>
          <div
            className="card-images"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            {trabajo.imagenes.map((enlace, index) => {
              return (
                <div key={index} className="card-images-container">
                  <img src={enlace.url} alt="Imagen Portfolio" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default DetalleTrabajo;

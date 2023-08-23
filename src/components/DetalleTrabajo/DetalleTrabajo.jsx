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
        <div className="enlaces-work">
          <BottomMore icono={<VscArrowLeft />} atras="atras" />
          <Link to="/trabajos">
            <BottomMore icono={<VscAdd />} />
          </Link>
        </div>

        <AnimatedHR />

        <div className="card-title">
          <h2>{trabajo.titulo}</h2>
          <p>{trabajo.habilidades}</p>
        </div>

        <div className="card-description">
          <AnimatedHR />
          <div className="card-text">
            <p className="card-text-title">Descripción:</p>
            <p className="card-text-desc">{trabajo.descripcion}</p>
          </div>

          <div className="card-urls">
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
          <div className="card-images">
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

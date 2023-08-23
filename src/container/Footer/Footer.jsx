import { Link } from "react-router-dom";
import { VscMail } from "react-icons/vsc";
import { VscCallIncoming } from "react-icons/vsc";
import { VscLocation } from "react-icons/vsc";
import interact from "interactjs";
import { useEffect } from "react";
import { VscFoldUp } from "react-icons/vsc";
import "./footer.css";

const Footer = () => {
  useEffect(() => {
    interact(".footer-up-card").draggable({
      // Configuración del arrastre
      modifiers: [
        interact.modifiers.restrictRect({
          // Limitar el arrastre al contenedor
          restriction: ".footer-up",
          endOnly: true,
        }),
      ],
      listeners: {
        move(event) {
          const target = event.target;
          const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
          const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

          target.style.transform = `translate(${x}px, ${y}px)`;

          target.setAttribute("data-x", x);
          target.setAttribute("data-y", y);
        },
      },
    });
  }, []);

  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="main-content">
      <div className="footer">
        <div className="footer-menu">
          <p className="footer-title">Menú</p>
          <ul className="footer-lista">
            <li>
              <Link to="/#home" className="footer-link">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/#aboutme" className="footer-link">
                Sobre mí
              </Link>
            </li>
            <li>
              <Link to="/#portfolio" className="footer-link">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="#contact" className="footer-link">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <p className="footer-title">Contacto</p>
          <ul className="footer-lista">
            <li>
              <VscMail />
              <a href="mailto:albertodlr14@gmail.com" className="footer-link">
                albertodlr14@gmail.com
              </a>
            </li>
            <li>
              <VscCallIncoming />
              <a href="tel:+34628989541" className="footer-link">
                +34 628 98 95 41
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-cty">
          <p className="footer-title">Ciudad</p>
          <ul className="footer-lista">
            <li>
              <VscLocation />
              <p className="footer-link">Donostia - San Sebastián</p>
            </li>
          </ul>
        </div>
        <div className="footer-up">
          <div className="footer-up-card" onClick={goUp}>
            <VscFoldUp />
          </div>
        </div>
      </div>
      <div className="footer-fin">
        <p className="footer-reserv">
          © 2023 Alberto de los Ríos. Todos los derechos reservados.
        </p>
        <div className="footer-social">
          <ul className="footer-lista">
            <li>
              <a
                href="https://www.behance.net/alberdlr"
                target="_blank"
                className="footer-link social"
                rel="noreferrer"
              >
                Bh
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AlbertoDLR14"
                target="_blank"
                className="footer-link social"
                rel="noreferrer"
              >
                Gh
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alberto-de-los-rios/"
                target="_blank"
                className="footer-link social"
                rel="noreferrer"
              >
                In
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/A14DLR"
                target="_blank"
                className="footer-link social"
                rel="noreferrer"
              >
                Tw
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

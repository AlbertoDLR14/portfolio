/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import anime from "animejs";
import { Link } from "react-router-dom";
import "./enlaces.css";

const Enlaces = ({
  direccion,
  clase,
  text,
  isExpanded = true,
  toggleMenu = false,
}) => {
  const animateMenu = (show) => {
    const menuNav = document.querySelector(".menu-nav");

    if (show) {
      anime({
        targets: menuNav,
        translateY: [-40, 0],
        opacity: [0, 1],
        duration: 400,
        easing: "easeInOutSine",
      });

      anime({
        targets: `.${clase}:after`,
        width: [0, 30],
        duration: 300,
        easing: "easeOutQuad",
      });
    }
  };

  useEffect(() => {
    animateMenu(isExpanded);
  }, [isExpanded]);

  return (
    <Link
      to={direccion}
      className={clase}
      onClick={() => {
        toggleMenu(false);
      }}
    >
      {text}
    </Link>
  );
};

export default Enlaces;

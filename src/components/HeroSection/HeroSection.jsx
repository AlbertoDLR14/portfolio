import { data } from "../../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./herosection.css";
import { useEffect, useState } from "react";

const fadeInWithSlideVariants = {
  hidden: (index) => ({
    x: index % 2 === 0 ? -50 : 50,
    opacity: 0,
  }),
  visible: { x: 0, opacity: 1 },
};

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition < window.innerHeight * 0.5) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [scrollPosition]);

  return (
    <div className="main-content padding-section">
      <div className="hero-section">
        <motion.div
          className="hero-author"
          custom={0}
          variants={fadeInWithSlideVariants}
          initial={shouldAnimate ? "hidden" : "visible"}
          animate={shouldAnimate ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          <p className="author">Alberto de los Ríos</p>
          <div className="separador" />
          <p className="puesto">{data.aboutMe.work}</p>
        </motion.div>
        <motion.div
          className="hero-description"
          custom={1}
          variants={fadeInWithSlideVariants}
          initial={shouldAnimate ? "hidden" : "visible"}
          animate={shouldAnimate ? "visible" : "hidden"}
          transition={{ duration: 2.5 }}
        >
          <h1>
            Sumérgete en un mundo donde la creatividad abraza la tecnología. Mi
            pasión por el diseño y el desarrollo da vida a experiencias
            digitales cautivadoras. Descubre cómo llevar tu presencia visual al
            siguiente nivel.
          </h1>
        </motion.div>
        <motion.div
          className="hero-nav"
          custom={2}
          variants={fadeInWithSlideVariants}
          initial={shouldAnimate ? "hidden" : "visible"}
          animate={shouldAnimate ? "visible" : "hidden"}
          transition={{ duration: 1.75 }}
        >
          <p>
            ¡Descubre mi{" "}
            <Link className="hero-enlace" to="#aboutme">
              historia
            </Link>
            ,{" "}
            <Link className="hero-enlace" to="#portfolio">
              mis trabajos
            </Link>{" "}
            o{" "}
            <Link className="hero-enlace" to="#contact">
              escríbeme
            </Link>{" "}
            para conocerme!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

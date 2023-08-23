import Elipse from "../../components/Elipse/Elipse";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { VscFoldDown } from "react-icons/vsc";
import "./header.css";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <header id="home">
        <Navbar />
        <Elipse
          widthElipse={1200}
          topElipse={0}
          rightElipse={0}
          topElipseImg={-600}
          rightElipseImg={-600}
        />
        <HeroSection />
        <Link to="#aboutme">
          <VscFoldDown className="icono-scroll" />
        </Link>
      </header>
    </>
  );
};

export default Header;

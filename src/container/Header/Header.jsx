import Elipse from "../../components/Elipse/Elipse";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import "./header.css";
import { VscFoldDown } from "react-icons/vsc";

const Header = () => {
  return (
    <>
      <header id="inicio">
        <Navbar />
        <Elipse
          widthElipse={1200}
          topElipse={0}
          rightElipse={0}
          topElipseImg={-600}
          rightElipseImg={-600}
        />
        <HeroSection />
        <a href="#sobremi">
          <VscFoldDown className="icono-scroll" />
        </a>
      </header>
    </>
  );
};

export default Header;

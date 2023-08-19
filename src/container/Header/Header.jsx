import Elipse from "../../components/Elipse/Elipse";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import "./header.css";
import { VscFoldDown } from "react-icons/vsc";

const Header = () => {
  return (
    <header id="inicio">
      <Elipse widthElipse={1200} topElipse={-600} rightElipse={-600} />
      <Navbar />
      <HeroSection />
      <a href="#sobremi">
        <VscFoldDown className="icono-scroll" />
      </a>
      <Elipse widthElipse={800} bottomElipse={-380} leftElipse={-380} />
    </header>
  );
};

export default Header;

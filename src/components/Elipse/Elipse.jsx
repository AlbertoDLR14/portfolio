/* eslint-disable react/prop-types */
import images from "../../constants/images";
import "./elipse.css";

const Elipse = ({
  widthElipse,
  topElipse,
  rightElipse,
  leftElipse,
  bottomElipse,
}) => {
  return (
    <div
      style={{
        width: `${widthElipse}px`,
        height: `${widthElipse}px`,
        top: topElipse !== undefined ? `${topElipse}px` : "auto",
        right: rightElipse !== undefined ? `${rightElipse}px` : "auto",
        left: leftElipse !== undefined ? `${leftElipse}px` : "auto",
        bottom: bottomElipse !== undefined ? `${bottomElipse}px` : "auto",
      }}
      className="degradado-elipse"
    >
      <img className="elipse-img" src={images.fondoElipse} alt="elipse" />
    </div>
  );
};

export default Elipse;

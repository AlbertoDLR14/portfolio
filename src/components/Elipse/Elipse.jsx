/* eslint-disable react/prop-types */
import images from "../../constants/images";
import "./elipse.css";

const Elipse = ({
  widthElipse,
  topElipse,
  rightElipse,
  leftElipse,
  bottomElipse,
  topElipseImg,
  rightElipseImg,
  leftElipseImg,
  bottomElipseImg,
}) => {
  return (
    <div
      style={{
        top: topElipse !== undefined ? `${topElipse}px` : "auto",
        right: rightElipse !== undefined ? `${rightElipse}px` : "auto",
        left: leftElipse !== undefined ? `${leftElipse}px` : "auto",
        bottom: bottomElipse !== undefined ? `${bottomElipse}px` : "auto",
      }}
      className="degradado-elipse"
    >
      <img
        style={{
          width: `${widthElipse}px`,
          height: `${widthElipse}px`,
          top: topElipseImg !== undefined ? `${topElipseImg}px` : "auto",
          right: rightElipseImg !== undefined ? `${rightElipseImg}px` : "auto",
          left: leftElipseImg !== undefined ? `${leftElipseImg}px` : "auto",
          bottom:
            bottomElipseImg !== undefined ? `${bottomElipseImg}px` : "auto",
        }}
        className="elipse-img"
        src={images.fondoElipse}
        alt="elipse"
      />
    </div>
  );
};

export default Elipse;

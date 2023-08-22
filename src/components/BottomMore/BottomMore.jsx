import "./bottommore.css";

// eslint-disable-next-line react/prop-types
const BottomMore = ({ icono, atras = null }) => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <span className="enlace-trabajos" onClick={atras ? handleGoBack : null}>
      {icono}
    </span>
  );
};

export default BottomMore;

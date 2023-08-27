import "./bottommore.css";

// eslint-disable-next-line react/prop-types
const BottomMore = ({ icono, atras = null, texto = null }) => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <span
      className={texto ? "enlace-trabajos-texto" : "enlace-trabajos"}
      onClick={atras ? handleGoBack : null}
    >
      {icono} {texto ? texto : ""}
    </span>
  );
};

export default BottomMore;

import "./animatedhr.css";

const AnimatedHR = () => {
  return (
    <hr
      className="divide"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
    />
  );
};

export default AnimatedHR;

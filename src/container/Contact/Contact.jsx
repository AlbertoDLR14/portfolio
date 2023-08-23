import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const sobremiElement = document.getElementById("contact");
      sobremiElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const email = "albertodlr14@gmail.com";

  return (
    <div id="contact">
      <p className="contact-mensaje">
        Conectar es el primer paso. Estoy a un mensaje de distancia.
      </p>
      <a href="mailto:albertodlr14@gmail.com" className="email-container">
        {email.split("").map((char, index) => (
          <span
            key={index}
            className={`email-char ${hoveredIndex === index ? "hovered" : ""} 
              ${hoveredIndex === index - 1 ? "hovered-near" : ""}
              ${hoveredIndex === index + 1 ? "hovered-near" : ""}
              ${hoveredIndex === index + 2 ? "hovered-near-next" : ""}
              ${hoveredIndex === index - 2 ? "hovered-near-next" : ""}
              ${hoveredIndex === index + 3 ? "hovered-near-next-next" : ""}
              ${hoveredIndex === index - 3 ? "hovered-near-next-next" : ""}
              `}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {char}
          </span>
        ))}
      </a>
    </div>
  );
};

export default Contact;

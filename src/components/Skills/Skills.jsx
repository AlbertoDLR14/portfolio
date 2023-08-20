import { useRef, useEffect } from "react";
import interact from "interactjs";
import "./skills.css";
import { data } from "../../constants";

const Skills = () => {
  const skillsBoxRefs = useRef([]);

  useEffect(() => {
    const container = document.querySelector(".skills-box-container");
    const containerRect = container.getBoundingClientRect();
    const screenWidth =
      window.innerWidth < 768
        ? window.innerWidth * 0.25
        : window.innerWidth < 1024
        ? window.innerWidth * 0.08
        : window.innerWidth * 0.1;
    const screenHeight =
      window.innerWidth < 768
        ? window.innerHeight * 0.5
        : window.innerHeight * 0.8;

    skillsBoxRefs.current.forEach((boxRef) => {
      let x = getRandomCoordinate(containerRect.width - 80);
      let y = getRandomCoordinate(containerRect.height - 80);

      // Verificar si las coordenadas están fuera de la pantalla
      if (x + 80 > screenWidth) {
        x = screenWidth - 80;
      }
      if (y + 80 > screenHeight) {
        y = screenHeight - 80;
      }

      boxRef.style.transform = `translate(${x}px, ${y}px)`;
      boxRef.setAttribute("data-x", x);
      boxRef.setAttribute("data-y", y);

      interact(boxRef).draggable({
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: container,
          }),
        ],
        listeners: {
          start(event) {
            event.target.classList.add("dragging");
          },
          move(event) {
            const target = event.target;
            const x =
              (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
            const y =
              (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

            target.style.transform = `translate(${x}px, ${y}px)`;

            target.setAttribute("data-x", x);
            target.setAttribute("data-y", y);

            // Check if the element is out of screen bounds
            if (
              x < 0 ||
              y < 0 ||
              x > screenWidth - 80 ||
              y > screenHeight - 80
            ) {
              // Reset the element's position
              target.style.transform = `translate(${x}px, ${y}px)`;
              target.setAttribute("data-x", x);
              target.setAttribute("data-y", y);
            }
          },
          end(event) {
            event.target.classList.remove("dragging");
          },
        },
      });
    });
  }, []);

  const getRandomCoordinate = (max) => {
    return Math.random() * max;
  };

  return (
    <div className="skills">
      <h2>habilidades</h2>
      <div className="skills-box-container">
        {data.skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillsBoxRefs.current[index] = el)}
            className="resize-drag"
            data-x="0"
            data-y="0"
          >
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

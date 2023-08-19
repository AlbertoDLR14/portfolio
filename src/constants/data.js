import images from "./images";

const aboutMe = {
  work: "Creador Visual & Programador Web",
  text: "Sumérgete en un mundo donde la creatividad abraza la tecnología. Mi pasión por el diseño y el desarrollo da vida a experiencias digitales cautivadoras. Descubre cómo llevar tu presencia visual al siguiente nivel.",
  textProfile:
    "Me describo como un entusiasta diseñador y programador web, buscando la intersección perfecta entre creatividad visual e innovación tecnológica. Mi enfoque se centra en construir experiencias digitales cautivadoras, fusionando diseño atractivo y funcionalidad fluida. Mi objetivo es crear proyectos que inspiren y conecten en el mundo digital.",
};

const qualities = [
  {
    title: "Diseño Gráfico",
    text: "Dando vida a la creatividad. Desde cautivadores banners hasta logos distintivos, cada pieza es un lienzo único. Iconos que cuentan historias y revistas que inspiran.",
    imgUrl: images.gDesign,
  },
  {
    title: "Diseño UX/UI",
    text: "Creo interfaces intuitivas para experiencias innovadoras. Desde wireframes detallados hasta prototipos interactivos donde la funcionalidad y estética convergen.",
    imgUrl: images.uxUi,
  },
  {
    title: "Desarrollo Web",
    text: "Transformo conceptos en plataformas dinámicas. Desde elegantes sitios de una sola página hasta aplicaciones más complejas.",
    imgUrl: images.dev,
  },
];

export default { aboutMe, qualities };

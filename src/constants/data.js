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
    delay: 300,
  },
  {
    title: "Diseño UX/UI",
    text: "Creo interfaces intuitivas para experiencias innovadoras. Desde wireframes detallados hasta prototipos interactivos donde la funcionalidad y estética convergen.",
    imgUrl: images.uxUi,
    delay: 800,
  },
  {
    title: "Desarrollo Web",
    text: "Transformo conceptos en plataformas dinámicas. Desde elegantes sitios de una sola página hasta aplicaciones más complejas.",
    imgUrl: images.dev,
    delay: 1300,
  },
];

const skills = [
  { name: "html" },
  { name: "css" },
  { name: "js" },
  { name: "react" },
  { name: "sql" },
  { name: "php" },
  { name: "figma" },
  { name: ".psd" },
  { name: ".ai" },
  { name: ".xd" },
  { name: ".indd" },
];

const trabajos = [
  {
    id: "1",
    titulo: "Generador de Enlaces Cortos",
    habilidades: "React",
    descripcion:
      "Desarrollé una innovadora aplicación web utilizando React que simplifica la experiencia de compartir enlaces largos. Esta herramienta permite a los usuarios ingresar URLs completas y generar enlaces cortos y legibles, perfectos para compartir en redes sociales, mensajes y correos electrónicos. La aplicación ofrece una interfaz intuitiva y fácil de usar, que presenta una vista del enlace acortado.",
    imgDestacada: images.urlDestacada,
    imagenes: [{ url: images.urlsImg }, { url: images.urlsImg2 }],
    url: "https://albertodlr14.github.io/generador-urls/",
    urlGithub: "https://github.com/AlbertoDLR14/generador-urls",
    urlBehance: "",
    urlAwwwards: "",
  },
  {
    id: "2",
    titulo: "Aplicación Crypto",
    habilidades: "HTML, CSS, JavaScript",
    descripcion:
      "Crypto App es una aplicación de seguimiento de criptomonedas, donde combiné mis habilidades en HTML, CSS y JavaScript para crear una experiencia interactiva y amigable para el usuario. Esta aplicación permite a los usuarios explorar en tiempo real las últimas tendencias en el mercado de criptomonedas, gracias a la integración de llamadas a una API de datos en tiempo real. Desde la implementación de una interfaz intuitiva y atractiva hasta la visualización dinámica de datos financieros.",
    imgDestacada: images.cryptoDestacado,
    imagenes: [{ url: images.cryptoImg }],
    url: "https://albertodlr14.github.io/crypto-app/",
    urlGithub: "https://github.com/AlbertoDLR14/crypto-app",
    urlBehance: "",
    urlAwwwards: "",
  },
  {
    id: "3",
    titulo: "Diseño carte Festival",
    habilidades: "Photoshop",
    descripcion:
      "Este es un carte que realice para un festival de rock, creado con Photoshop. Esta pieza combina elementos gráficos y visuales en un conjunto único que representa la esencia del evento. Los tonos elegidos refuerzan la estética del festival con un diseño que busca reflejar la esencia del rock a través de la manipulación digital",
    imgDestacada: images.rockDestacado,
    imagenes: [{ url: images.rock }, { url: images.rock2 }],
    url: "",
    urlGithub: "",
    urlBehance:
      "https://www.behance.net/gallery/103428881/Poster-Rock-Festival",
    urlAwwwards: "",
  },
];

export default { aboutMe, qualities, skills, trabajos };

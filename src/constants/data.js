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
    urls: [
      { nombre: "Web", url: "https://albertodlr14.github.io/generador-urls/" },
      {
        nombre: "Github",
        url: "https://github.com/AlbertoDLR14/generador-urls",
      },
      { nombre: "Behance", url: "" },
      { nombre: "Awwards", url: "" },
    ],
  },
  {
    id: "2",
    titulo: "Aplicación Crypto",
    habilidades: "HTML, CSS, JavaScript",
    descripcion:
      "Crypto App es una aplicación de seguimiento de criptomonedas, donde combiné mis habilidades en HTML, CSS y JavaScript para crear una experiencia interactiva y amigable para el usuario. Esta aplicación permite a los usuarios explorar en tiempo real las últimas tendencias en el mercado de criptomonedas, gracias a la integración de llamadas a una API de datos en tiempo real. Desde la implementación de una interfaz intuitiva y atractiva hasta la visualización dinámica de datos financieros.",
    imgDestacada: images.cryptoDestacado,
    imagenes: [{ url: images.cryptoImg }],
    urls: [
      { nombre: "Web", url: "https://albertodlr14.github.io/crypto-app/" },
      {
        nombre: "Github",
        url: "https://github.com/AlbertoDLR14/crypto-app",
      },
      { nombre: "Behance", url: "" },
      { nombre: "Awwwards", url: "" },
    ],
  },
  {
    id: "3",
    titulo: "Diseño carte Festival",
    habilidades: "Photoshop",
    descripcion:
      "Este es un carte que realice para un festival de rock, creado con Photoshop. Esta pieza combina elementos gráficos y visuales en un conjunto único que representa la esencia del evento. Los tonos elegidos refuerzan la estética del festival con un diseño que busca reflejar la esencia del rock a través de la manipulación digital",
    imgDestacada: images.rockDestacado,
    imagenes: [{ url: images.rock }, { url: images.rock2 }],
    urls: [
      { nombre: "Web", url: "" },
      {
        nombre: "Github",
        url: "",
      },
      {
        nombre: "Behance",
        url: "https://www.behance.net/gallery/103428881/Poster-Rock-Festival",
      },
      { nombre: "Awwwards", url: "" },
    ],
  },
  {
    id: "4",
    titulo: "UI Landing page contact",
    habilidades: "Adobe XD, Illustrator",
    descripcion:
      "He realizado el diseño de la interfaz y la experiencia de usuario para una página de contacto. Utilicé herramientas como Adobe Illustrator y Adobe XD para crear una interfaz intuitiva y agradable visualmente. Mi objetivo era asegurarme de que cada elemento estuviera en su lugar correcto, garantizando una experiencia de usuario fluida y atractiva.",
    imgDestacada: images.destacadoFormma,
    imagenes: [
      { url: images.formma },
      { url: images.formma2 },
      { url: images.formma3 },
      { url: images.formma4 },
      { url: images.formma5 },
      { url: images.formma6 },
      { url: images.formmaGif },
    ],
    urls: [
      { nombre: "Web", url: "" },
      {
        nombre: "Github",
        url: "",
      },
      {
        nombre: "Behance",
        url: "https://www.behance.net/gallery/115316489/UI-Landing-Page-Contact",
      },
      { nombre: "Awwwards", url: "" },
    ],
  },
  {
    id: "5",
    titulo: "UI Wyms Fitenss",
    habilidades: "Adobe XD, Illustrator, Photoshop",
    descripcion:
      "He realizado el diseño de la interfaz y la experiencia de usuario para una aplicación de fitenss. Utilizando mi creatividad y habilidades en diseño de interfaz (UI) y experiencia de usuario (UX), he dado forma a una aplicación que fomenta un estilo de vida saludable de manera atractiva utilizando herramientas como Adobe XD, Photoshop e Illustrator. Este proyecto refleja mi pasión por el diseño centrado en el usuario y mi capacidad para transformar ideas en interfaces atractivas y efectivas.",
    imgDestacada: "",
    imagenes: [
      { url: images.wyms },
      { url: images.wyms2 },
      { url: images.wyms3 },
      { url: images.wyms4 },
      { url: images.wyms5 },
      { url: images.wyms6 },
      { url: images.wyms7 },
      { url: images.wyms8 },
      { url: images.wyms9 },
    ],
    urls: [
      { nombre: "Web", url: "" },
      {
        nombre: "Github",
        url: "",
      },
      {
        nombre: "Behance",
        url: "https://www.behance.net/gallery/110824361/UI-APP-FITNESS",
      },
      { nombre: "Awwwards", url: "" },
    ],
  },
  {
    id: "6",
    titulo: "Pomodoro",
    habilidades: "JavaScript, HTML, CSS",
    descripcion:
      "Utilizando mis habilidades en desarrollo web con HTML, CSS y JavaScript, he creado una aplicación de Pomodoro que ayuda a los usuarios a maximizar su productividad y concentración.",
    imgDestacada: "",
    imagenes: [{ url: images.pomodoro }],
    urls: [
      { nombre: "Web", url: "https://albertodlr14.github.io/pomodoro/" },
      {
        nombre: "Github",
        url: "https://github.com/AlbertoDLR14/pomodoro",
      },
      {
        nombre: "Behance",
        url: "",
      },
      { nombre: "Awwwards", url: "" },
    ],
  },
  {
    id: "7",
    titulo: "Calculadora JS",
    habilidades: "JavaScript, HTML, CSS",
    descripcion:
      "He diseñado y desarrollado una interfaz intuitiva que permite a los usuarios realizar cálculos matemáticos de manera eficiente. Mediante el uso de HTML y CSS, he creado una estética atractiva y responsiva. La funcionalidad principal de la calculadora ha sido implementada con JavaScript, permitiendo realizar multiples operaciones.",
    imgDestacada: "",
    imagenes: [{ url: images.calculadora }],
    urls: [
      { nombre: "Web", url: "https://albertodlr14.github.io/calculadora/" },
      {
        nombre: "Github",
        url: "https://github.com/AlbertoDLR14/calculadora",
      },
      {
        nombre: "Behance",
        url: "",
      },
      { nombre: "Awwwards", url: "" },
    ],
  },
  {
    id: "8",
    titulo: "Notas JS",
    habilidades: "JavaScript, HTML, CSS",
    descripcion:
      "Presento mi proyecto de una aplicación de notas desarrollada con HTML, CSS y JavaScript. Permite a los usuarios crear, editar y eliminar notas, con la ventaja de que las notas se guardan automáticamente en el localStorage del navegador. Una solución simple y efectiva para mantener la organización y la productividad.",
    imgDestacada: "",
    imagenes: [{ url: images.notas }, { url: images.notas2 }],
    urls: [
      { nombre: "Web", url: "https://albertodlr14.github.io/notas-crud/" },
      {
        nombre: "Github",
        url: "https://github.com/AlbertoDLR14/notas-crud",
      },
      {
        nombre: "Behance",
        url: "",
      },
      { nombre: "Awwwards", url: "" },
    ],
  },
  {
    id: "9",
    titulo: "Petmic:  Identidad de Marca & App UI",
    habilidades: "Photoshop, Illustrator, Adobe XD",
    descripcion:
      "Presento mi proyecto de identidad de marca y diseño de aplicación. Con Photoshop e Illustrator, creé un logotipo distintivo, carteles llamativos y patrones únicos. Luego, en Adobe XD, diseñé una interfaz de usuario intuitiva. Una propuesta completa que une creatividad y coherencia.",
    imgDestacada: "",
    imagenes: [
      { url: images.petmic },
      { url: images.petmic2 },
      { url: images.petmic3 },
      { url: images.petmic4 },
      { url: images.petmic5 },
      { url: images.petmic6 },
      { url: images.petmic7 },
      { url: images.petmic8 },
      { url: images.petmic9 },
      { url: images.petmic10 },
    ],
    urls: [
      { nombre: "Web", url: "" },
      {
        nombre: "Github",
        url: "",
      },
      {
        nombre: "Behance",
        url: "https://www.behance.net/gallery/116641903/Petmic-Brand-identity-and-UI-APP",
      },
      { nombre: "Awwwards", url: "" },
    ],
  },
  {
    id: "10",
    titulo: "Logofolio",
    habilidades: "Photoshop, Illustrator",
    descripcion:
      "Una colección que refleja mi pasión por el diseño de logotipos. Con la ayuda de Photoshop e Illustrator, he dado vida a las identidades únicas de diversas marcas. Cada logotipo es una expresión de creatividad y cuidado en los detalles, capturando la esencia de cada negocio de manera distintiva.",
    imgDestacada: "",
    imagenes: [
      { url: images.logos },
      { url: images.logos2 },
      { url: images.logos3 },
      { url: images.logos4 },
      { url: images.logos5 },
      { url: images.logos6 },
      { url: images.logos7 },
    ],
    urls: [
      { nombre: "Web", url: "" },
      {
        nombre: "Github",
        url: "",
      },
      {
        nombre: "Behance",
        url: "https://www.behance.net/gallery/115315649/POSTERS-DESIGN-CARTELES-DISENO",
      },
      { nombre: "Awwwards", url: "" },
    ],
  },
  {
    id: "11",
    titulo: "Calendario Donostia 2019",
    habilidades: "Photoshop, Illustrator, InDesign",
    descripcion:
      "Presento mi proyecto de diseño de calendario, donde convergen creatividad y organización. Utilizando Photoshop, Illustrator e InDesign, he creado un calendario visualmente atractivo y funcional. Además, he diseñado logotipos personalizados para cada mes, añadiendo un toque único a cada página. Esta combinación de herramientas ha permitido plasmar mi pasión por el diseño en un proyecto práctico y estético.",
    imgDestacada: "",
    imagenes: [
      { url: images.calendario },
      { url: images.calendario2 },
      { url: images.calendario3 },
    ],
    urls: [
      { nombre: "Web", url: "" },
      {
        nombre: "Github",
        url: "",
      },
      {
        nombre: "Behance",
        url: "https://www.behance.net/gallery/99003179/Diseno-del-Calendario-2019",
      },
      { nombre: "Awwwards", url: "" },
    ],
  },
  {
    id: "12",
    titulo: "Posters",
    habilidades: "Photoshop, Illustrator",
    descripcion:
      "Explora mi Colección de Carteles, donde la creatividad cobra vida. Con Photoshop e Illustrator, he creado diseños llamativos y efectivos que cuentan historias visualmente. Cada cartel es una combinación única de ideas y habilidades, diseñada para transmitir mensajes de manera impactante y clara.",
    imgDestacada: "",
    imagenes: [
      { url: images.cartel },
      { url: images.cartel1 },
      { url: images.cartel2 },
      { url: images.cartel3 },
      { url: images.cartel4 },
      { url: images.cartel5 },
    ],
    urls: [
      { nombre: "Web", url: "" },
      {
        nombre: "Github",
        url: "",
      },
      {
        nombre: "Behance",
        url: "https://www.behance.net/gallery/115316881/Logofolio-2021",
      },
      { nombre: "Awwwards", url: "" },
    ],
  },
];

export default { aboutMe, qualities, skills, trabajos };

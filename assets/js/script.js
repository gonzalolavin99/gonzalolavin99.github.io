const proyectos = [
    {
      title: "To-do List",
      description: "To-Do List",
      imageSrc: "assets/imgs/to_do_list.png",
      link: "py_metodos",
    },
    {
      title: "APIS",
      description: "Proyecto usando por primera vez APIS",
      imageSrc: "assets/imgs/apis.png",
      link: "apis_py",
    },
    {
      title: "Proyecto Flex",
      description: "Proyecto usando por primera vez Flex",
      imageSrc: "assets/imgs/flex.jpg",
      link: "Desafío 3 Gonzalo Lavín/iguana_proyect/index.html",
    },
    {
      title: "Proyecto Bootstrap",
      description: "Proyecto usando por primera vez en Bootstrap",
      imageSrc: "assets/imgs/bootstrap.jpg",
      link: "desafío_4_Gonzalo_Lavin/desafío_4/index.html",
    },
  ];
  
  const projectsContainer = document.querySelector(".row-cols-1"); 
  
  proyectos.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "col";
  
    projectCard.innerHTML = `
      <div class="card border-dark mt-2 ms-2">
          <img src="${project.imageSrc}" class="card-img-top" alt="${project.title}" />
          <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.description}</p>
              <a href="${project.link}" class="btn btn-primary">Ir al proyecto</a>
          </div>
      </div>
    `;
  
    projectsContainer.appendChild(projectCard); 
  });
const cvContent = document.getElementById("cv-content");

const cvHTML = `
  <header>
    <h1 class="titulo">Currículum Vitae</h1>
    <img src="assets/imgs/currículum.jpg" alt="Foto tipo currículum Vitae" />
  </header>
  <h2>Gonzalo Lavín</h2>
  <h3>Resumen</h3>
  <p>
    Soy una persona que está comenzando sus estudios en el área del desarrollo
    web, en este caso estudiando la carrera de Fullstack Developer. Llevo 6
    años trabajando en el área de servicio al cliente. Mi primera experiencia
    fue en Starbucks en dónde lideré equipos como supervisor de tienda. En
    este momento me desarrollo en el área automotriz como asesor de un
    concesionario en el sector de desabolladura y pintura. Mi objetivo en este
    momento es aprender lo que más pueda sobre el desarrollo web para
    ampliar aún más mis conocimientos y poder dedicarme totalmente al área.
  </p>
  <h3>Datos Personales</h3>
  <ul>
    <li>Nombre: Gonzalo Ambrosio Lavín Cordova</li>
    <li>Lugar de Nacimiento: Santiago, Chile</li>
    <li>Fecha de Nacimiento: 04 de mayo de 1999</li>
  </ul>
  <h3>Formación</h3>
  <ol>
    <li>
      <h4>Enseñanza básica</h4>
      <p>2004-2013 Colegio Infantes de la Reina</p>
    </li>
    <li>
      <h4>Enseñanza media</h4>
      <p>2014-2017 Colegio San Francisco del Alba</p>
    </li>
    <li>
      <h4>Enseñanza superior</h4>
      <p>2023-presente Fullstack Developer</p>
    </li>
  </ol>
  <a href="https://www.linkedin.com/in/gonzalo-lav%C3%ADn-68a631214/" target="_blank">
    <img src="assets/imgs/LinkedIn_Logo.svg.png" alt="Linkedin Logo" />
  </a>
`;


cvContent.innerHTML = cvHTML;

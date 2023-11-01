const primeraEtapa = [
    {
        title: "Proyecto HTML",
        description: "Presentación proyecto en HTML",
        imageSrc: "assets/imgs/html.jpg",
        link: "#",
    },
    {
        title: "Proyecto CSS",
        description: "Proyecto usando por primera vez CSS",
        imageSrc: "assets/imgs/proyecto_css.jpg",
        link: "Desafío Semana 2 CSS Gonzalo Lavín/Landing Page/index.html",
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

// Agregar proyectos al contenedor
const projectsContainer = document.getElementById("projects-container");
primeraEtapa.forEach((project) => {
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
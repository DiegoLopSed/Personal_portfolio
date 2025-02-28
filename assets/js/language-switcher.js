document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        en: {
            welcome: "Welcome to My Portfolio",
            intro: "Hello! I'm Diego Lopez Sedeño, a Back End Developer with experience in building robust web applications and managing databases. Check out my projects below and feel free to connect with me!",
            aboutTitle: "About Me",
            aboutContent: "I specialize in developing APIs for food industry services and have extensive experience using Python for data manipulation and document handling with Pandas. My focus is on creating efficient and scalable solutions tailored to client needs.",
            projectsTitle: "My Projects",
            project1: "API Development: Designed APIs for managing restaurant services, streamlining operations, and improving customer experience.",
            project2: "Database Management: Created and optimized relational databases to support web applications.",
            project3: "Python Automation: Built scripts using Pandas to process and transform large datasets efficiently.",
            contactTitle: "Contact Me",
            email: "Email",
            phone: "Phone",
            navHome: "Home",
            navAbout: "About",
            navProjects: "Projects",
            navContact: "Contact",
        },
        es: {
            welcome: "Bienvenido a Mi Portafolio",
            intro: "¡Hola! Soy Diego Lopez Sedeño, un Desarrollador Back End con experiencia en la creación de aplicaciones web robustas y gestión de bases de datos. ¡Mira mis proyectos a continuación y no dudes en conectarte conmigo!",
            aboutTitle: "Sobre Mí",
            aboutContent: "Me especializo en el desarrollo de APIs para servicios de la industria alimentaria y tengo amplia experiencia utilizando Python para la manipulación de datos y el manejo de documentos con Pandas. Mi enfoque está en crear soluciones eficientes y escalables adaptadas a las necesidades del cliente.",
            projectsTitle: "Mis Proyectos",
            project1: "Desarrollo de API: Diseñé APIs para gestionar servicios de restaurantes, optimizando operaciones y mejorando la experiencia del cliente.",
            project2: "Gestión de Bases de Datos: Creé y optimicé bases de datos relacionales para soportar aplicaciones web.",
            project3: "Automatización con Python: Desarrollé scripts utilizando Pandas para procesar y transformar grandes conjuntos de datos de manera eficiente.",
            contactTitle: "Contáctame",
            email: "Correo Electrónico",
            phone: "Teléfono",
            navHome: "Inicio",
            navAbout: "Sobre Mí",
            navProjects: "Proyectos",
            navContact: "Contacto",
        }
    };

    const languageSelector = document.getElementById("language-selector");
    const elements = {
        welcome: document.getElementById("welcome"),
        intro: document.getElementById("intro"),
        aboutTitle: document.getElementById("about-title"),
        aboutContent: document.getElementById("about-content"),
        projectsTitle: document.getElementById("projects-title"),
        project1: document.getElementById("project-1"),
        project2: document.getElementById("project-2"),
        project3: document.getElementById("project-3"),
        contactTitle: document.getElementById("contact-title"),
        email: document.getElementById("email"),
        phone: document.getElementById("phone"),
        navHome: document.getElementById("nav-home"),
        navAbout: document.getElementById("nav-about"),
        navProjects: document.getElementById("nav-projects"),
        navContact: document.getElementById("nav-contact"),
    };

    languageSelector.addEventListener("change", () => {
        const selectedLanguage = languageSelector.value;
        const translation = translations[selectedLanguage];

        Object.keys(elements).forEach(key => {
            if (elements[key]) elements[key].textContent = translation[key];
        });
    });
});

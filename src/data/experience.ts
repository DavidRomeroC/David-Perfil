
interface ExpUser {
    id: number;
    name_work: string;
    description: string;
    tech_stack: string;
    from: string;
    to: string;
}



export const exp: ExpUser[] = [
    {
        id: 1,
        name_work: "Desarrollador FrontEnd - Freelance",
        description: "Desarrollo de aplicaciones web con los nuevos estándares de desarrollo ES6+. Diseño responsive de aplicaciones web utilizando css y frameworks. Generación y optimización de componentes web en Reactjs para una mejor semántica de la aplicación web. Utilización de gestor de paquetes de npm dentro de las aplicaciones. Consumo de APIs y manipulación de los datos. Integración de React Router Dom para la creación y protección de rutas públicas y privadas. Utilización de Redux Toolkit para la manipulación de estados globales.",
        tech_stack: "Javascript, ReactJs, Router, Redux toolkit, Sass, Html5, Css3, npm, TypeScript, Git, GitHub",
        from: "Abril 2021",
        to: "Actual",
    },
    {
        id: 2,
        name_work: "Técnico Informárico - Freelance",
        description: "Mantenimiento preventivo de hardware y software para clientes locales. Conocimiento en procedimientos de instalación de sistemas operativos como linux y windows. Atender consultas y soluciones de apoyo de los clientes. Administración de software y herramientas de asistencia técnica. Optimización y gestión en ensamblaje de equipos informáticos.",
        tech_stack: "",
        from: "Febrero 2021",
        to: "Actual",
    },
    {
        id: 3,
        name_work: "Desarrollador FrontEnd de Menú App - Freelance",
        description: "Desarrollé código de calidad basado en los estándares de ES6+ y buenas prácticas. Realicé diseño de la interfaz de usuario interactivo aplicando responsive design. Desarrolle aplicación de menú interactivo para negocio de comida local. Integré y desarrolle componentes web en ReactJs en la primer versión de la aplicación.",
        tech_stack: "JavaScript, ReactJs, React Router, sass, css3, html5, npm, git",
        from: "Enero 2022",
        to: "Febrero 2022",
    },
    {
        id: 4,
        name_work: "Desarrollador líder de hardware y software de máquina CNC - ITSMT",
        description: "Optimice en un 70% la UI de control para la máquina CNC. Gestione un equipo de colaboradores implementando metodología agile SCRUM y GitHub. Realicé conexión y comunicación entre máquina CNC y PC por medio de puerto serial (COM). Diseñe y desarrolle piezas de la máquina CNC por medio de herramientas de diseño CAD/CAM/CAE. Implemente tecnologías Web para mejorar la experiencia del usuario un 100%.",
        tech_stack: "Arduino, c++, JavaScript, html, css3, solidworks, ansys, proteus, mach3",
        from: "Febrero 2020",
        to: "Enero 2021",
    },

]
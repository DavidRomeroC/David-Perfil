
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
        description: "Desarrollo de aplicaciones web con los nuevos estándares de desarrollo ES6+. Diseño responsive de aplicaciones web utilizando css y frameworks. Generación y optimización de componentes web en Reactjs para una mejor semántica de la aplicación web. Utilización de gestor de paquetes de npm dentro de las aplicaciones. Consumo de APIs y manipulación de los datos. Integración de React Router Dom para la creación y protección de rutas públicas y privadas. Utilización de Redux Toolkit para la manipulación de estados globales",
        tech_stack: "Javascript, ReactJs, Router, Redux toolkit, Sass, Html5, Css3, npm, TypeScript, Git, GitHub",
        from: "Abril 2021",
        to: "Actual",
    },
    {
        id: 2,
        name_work: "Técnico Informárico - Freelance",
        description: "Mantenimiento preventivo de hardware y software para clientes locales. Conocimiento en procedimientos de instalación de sistemas operativos como linux y windows. Atender consultas y soluciones de apoyo de los clientes. Administración de software y herramientas de asistencia técnica. Optimización y gestión en ensamblaje de equipos informáticos",
        tech_stack: "",
        from: "Febrero 2021",
        to: "Actual",
    },
]
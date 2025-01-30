export default {
    id: "SearchDataProps",
    name: "SearchDataProps",
    description:
        "Interfaz que define las propiedades para la busqueda del elementos en tablas o componentes personalizados.",
    props: [
        {
            id: "search",
            type: "string",
            required: false,
            default: "undefined",
            description: "Texto a buscar.",
        },
    ],
};

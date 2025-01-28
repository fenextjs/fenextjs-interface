export default {
    id: "PaginationDataProps",
    name: "PaginationDataProps",
    description:
        "Interfaz que define las propiedades para la paginacion del elementos en tablas o componentes personalizados.",
    props: [
        {
            id: "page",
            type: "number (opcional)",
            required: false,
            default: "undefined",
            description: "Pagina actual.",
        },
        {
            id: "npage",
            type: "number (opcional)",
            required: false,
            default: "undefined",
            description: "Numero de elementos por pagina.",
        },
    ],
};

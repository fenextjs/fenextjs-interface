export default {
    id: "DateDataProps",
    name: "DateDataProps",
    description:
        "Interfaz para manejar datos de fecha en diferentes formatos, ya sea como una fecha única o un rango de fechas.",
    props: [
        {
            id: "type",
            type: "DateDataTypeProps",
            require: false,
            description: "Define si el tipo de fecha es 'normal' o 'range'.",
            default: "'normal'",
        },
        {
            id: "date",
            type: "Date",
            require: false,
            description: "Fecha seleccionada en formato individual.",
            default: "undefined",
        },
        {
            id: "dateRange",
            type: "Date[]",
            require: false,
            description: "Rango de fechas seleccionadas.",
            default: "undefined",
        },
    ],
    useExample: [
        {
            text: "Uso con una fecha única",
            content: `const dateData: DateDataProps = { type: 'normal', date: new Date() };`,
        },
        {
            text: "Uso con un rango de fechas",
            content: `const dateData: DateDataProps = { type: 'range', dateRange: [new Date(), new Date()] };`,
        },
    ],
};

export default {
    id: "timeZoneProps",
    name: "TimeZoneProps",
    description:
        "Interfaz que define las propiedades para manejar la zona horaria y la hora específica.",
    props: [
        {
            id: "zone",
            type: "string",
            required: true,
            default: "N/A",
            description:
                "Nombre de la zona horaria (por ejemplo, 'America/New_York').",
        },
        {
            id: "time",
            type: "string",
            required: true,
            default: "N/A",
            description:
                "Hora en formato de cadena, que representa la hora local en la zona horaria especificada.",
        },
    ],
    extras: [],
};

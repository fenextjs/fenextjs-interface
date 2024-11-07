export default {
    id: "alertProps",
    name: "AlertProps",
    description: "Interfaz que define las propiedades para configurar una alerta.",
    props: [
        {
            id: "message",
            type: "string",
            required: true,
            default: "N/A",
            description: "Mensaje de la alerta que se mostrará al usuario.",
        },
        {
            id: "type",
            type: "AlertType | keyof typeof AlertType",
            required: true,
            default: "N/A",
            description: "Especifica el tipo de alerta; acepta un valor del enum `AlertType` o una cadena equivalente.",
        },
        {
            id: "data",
            type: "T (opcional)",
            required: false,
            default: "undefined",
            description: "Datos adicionales opcionales asociados con la alerta.",
        },
    ],
    extras: [
        {
            id: "alertType",
            title: "AlertType",
            description: "Enumeración que define los diferentes tipos de alerta disponibles.",
            tableItems: [
                {
                    key: "OK",
                    value: "'OK'",
                    description: "Tipo de alerta que indica que la operación fue exitosa.",
                },
                {
                    key: "ERROR",
                    value: "'ERROR'",
                    description: "Tipo de alerta que indica un error.",
                },
                {
                    key: "NORMAL",
                    value: "'NORMAL'",
                    description: "Tipo de alerta que representa un estado informativo o neutral.",
                },
                {
                    key: "WARNING",
                    value: "'WARNING'",
                    description: "Tipo de alerta que indica una advertencia.",
                },
            ],
        },
    ],
};

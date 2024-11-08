export default {
    id: "fileProps",
    name: "FileProps",
    description:
        "Interfaz que define las propiedades para configurar un archivo.",
    props: [
        {
            id: "uuid",
            type: "string (opcional)",
            required: false,
            default: "undefined",
            description: "Identificador único universal del archivo.",
        },
        {
            id: "id",
            type: "string (opcional)",
            required: false,
            default: "undefined",
            description: "Identificador del archivo.",
        },
        {
            id: "text",
            type: "string (opcional)",
            required: false,
            default: "undefined",
            description: "Texto descriptivo asociado al archivo.",
        },
        {
            id: "extend",
            type: "string (opcional)",
            required: false,
            default: "undefined",
            description: "Extensión del archivo.",
        },
        {
            id: "fileData",
            type: "any",
            required: true,
            default: "N/A",
            description: "Datos del archivo en cualquier formato requerido.",
        },
        {
            id: "base64",
            type: "string (opcional)",
            required: false,
            default: "undefined",
            description: "Representación en base64 del archivo.",
        },
        {
            id: "url",
            type: "string (opcional)",
            required: false,
            default: "undefined",
            description: "URL del archivo para acceso directo.",
        },
        {
            id: "status",
            type: "FileStatus | keyof typeof FileStatus (opcional)",
            required: false,
            default: "undefined",
            description:
                "Especifica el estado del archivo; acepta un valor del enum `FileStatus` o una cadena equivalente.",
        },
    ],
    extras: [
        {
            id: "fileStatus",
            title: "FileStatus",
            description:
                "Enumeración que define los diferentes estados disponibles para un archivo.",
            tableItems: [
                {
                    key: "NONE",
                    value: "'NONE'",
                    description:
                        "Estado que indica que no se ha asignado ningún estado al archivo.",
                },
                {
                    key: "APPROVED",
                    value: "'APPROVED'",
                    description:
                        "Estado que indica que el archivo ha sido aprobado.",
                },
                {
                    key: "PENDING",
                    value: "'PENDING'",
                    description:
                        "Estado que indica que el archivo está pendiente de revisión.",
                },
                {
                    key: "REFUSED",
                    value: "'REFUSED'",
                    description:
                        "Estado que indica que el archivo ha sido rechazado.",
                },
            ],
        },
    ],
};

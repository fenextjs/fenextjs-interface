export default {
    id: "requestResultProps",
    name: "RequestResultProps",
    description:
        "Tipos y interfaces que definen la estructura de resultados de una solicitud, incluyendo el tipo de resultado, datos, y posibles errores.",
    props: [
        {
            id: "type",
            type: "RequestResultTypeProps | keyof typeof RequestResultTypeProps",
            required: true,
            default: "N/A",
            description:
                "Especifica el tipo de resultado de la solicitud; acepta un valor del enum `RequestResultTypeProps` o una cadena equivalente.",
        },
        {
            id: "result",
            type: "R (opcional)",
            required: false,
            default: "undefined",
            description: "El resultado de la solicitud si esta fue exitosa.",
        },
        {
            id: "error",
            type: "ErrorProps<E> (opcional)",
            required: false,
            default: "undefined",
            description:
                "Detalles del error si la solicitud falló, definidos por la interfaz `ErrorProps`.",
        },
        {
            id: "message",
            type: "string (opcional)",
            required: false,
            default: "undefined",
            description:
                "Mensaje adicional relacionado con el resultado de la solicitud.",
        },
    ],
    extras: [
        {
            id: "requestResultTypeProps",
            title: "RequestResultTypeProps",
            description:
                "Enumeración que define los diferentes tipos de resultados de una solicitud.",
            tableItems: [
                {
                    key: "OK",
                    value: "'OK'",
                    description: "Indica que la solicitud fue exitosa.",
                },
                {
                    key: "ERROR",
                    value: "'ERROR'",
                    description: "Indica que hubo un error en la solicitud.",
                },
                {
                    key: "NONE",
                    value: "'NONE'",
                    description:
                        "Indica que no hay resultado o estado asociado a la solicitud.",
                },
                {
                    key: "NORMAL",
                    value: "'NORMAL'",
                    description:
                        "Indica un estado normal o neutral en la solicitud.",
                },
                {
                    key: "WARNING",
                    value: "'WARNING'",
                    description:
                        "Indica una advertencia asociada a la solicitud.",
                },
            ],
        },
        {
            id: "requestResultProps",
            title: "RequestResultProps",
            description:
                "Tipo que define el resultado de una solicitud, que puede ser una promesa de `RequestResultDataProps` o `RequestResultDataProps` directamente.",
            tableItems: [
                {
                    key: "Promise<RequestResultDataProps<R, E, T>>",
                    value: "Promesa de un objeto `RequestResultDataProps`",
                    description:
                        "Resultado de la solicitud en forma de promesa.",
                },
                {
                    key: "RequestResultDataProps<R, E, T>",
                    value: "Objeto de tipo `RequestResultDataProps`",
                    description:
                        "Resultado de la solicitud como objeto directo.",
                },
            ],
        },
        {
            id: "requestProps",
            title: "RequestProps",
            description:
                "Tipo de función que representa una solicitud con datos de entrada y un tipo de resultado especificado.",
            tableItems: [
                {
                    key: "(data: Q) => RequestResultProps<R, E, T>",
                    value: "Función",
                    description:
                        "Función que toma datos de tipo `Q` y devuelve un `RequestResultProps`.",
                },
            ],
        },
    ],
};

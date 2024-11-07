export default {
    id: "phoneProps",
    name: "PhoneProps",
    description: "Interfaz que define las propiedades de un número de teléfono, incluyendo el código de país y la bandera.",
    props: [
        {
            id: "img",
            type: "string (opcional)",
            required: false,
            default: "undefined",
            description: "URL de la imagen de la bandera del país.",
        },
        {
            id: "code",
            type: "string",
            required: true,
            default: "N/A",
            description: "Código telefónico del país (e.g., '+1', '+44').",
        },
        {
            id: "code_country",
            type: "string (opcional)",
            required: false,
            default: "undefined",
            description: "Código del país en formato ISO (e.g., 'US', 'GB').",
        },
        {
            id: "country",
            type: "CountryProps (opcional)",
            required: false,
            default: "undefined",
            description: "Propiedades adicionales del país, definidas por la interfaz `CountryProps`.",
        },
        {
            id: "number",
            type: "string",
            required: true,
            default: "N/A",
            description: "Número de teléfono.",
        },
        {
            id: "tel",
            type: "string (opcional)",
            required: false,
            default: "undefined",
            description: "Número de teléfono en formato 'tel' para enlaces de marcación rápida.",
        },
    ],
    extras: [
        {
            id: "phoneCodeProps",
            title: "PhoneCodeProps",
            description: "Interfaz que define las propiedades relacionadas con el código telefónico de un país.",
            tableItems: [
                {
                    key: "img",
                    value: "string (opcional)",
                    description: "URL de la imagen de la bandera del país.",
                },
                {
                    key: "code",
                    value: "string",
                    description: "Código telefónico del país.",
                },
                {
                    key: "code_country",
                    value: "string (opcional)",
                    description: "Código del país en formato ISO.",
                },
                {
                    key: "country",
                    value: "CountryProps (opcional)",
                    description: "Propiedades adicionales del país.",
                },
            ],
        },
    ],
};

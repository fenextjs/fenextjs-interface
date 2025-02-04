export default {
    id: "cscProps",
    name: "CSCProps",
    description:
        "Interfaz que define las propiedades relacionadas con un país, estado y ciudad, junto con versiones de texto de cada una.",
    props: [
        {
            id: "country",
            type: "CountryProps (opcional)",
            required: false,
            default: "undefined",
            description:
                "Propiedades del país seleccionadas, definidas en la interfaz `CountryProps`.",
        },
        {
            id: "state",
            type: "StateProps (opcional)",
            required: false,
            default: "undefined",
            description:
                "Propiedades del estado seleccionado, definidas en la interfaz `StateProps`.",
        },
        {
            id: "city",
            type: "CityProps (opcional)",
            required: false,
            default: "undefined",
            description:
                "Propiedades de la ciudad seleccionada, definidas en la interfaz `CityProps`.",
        },
    ],
    extras: [
        {
            id: "countryProps",
            title: "CountryProps",
            description: "Interfaz que define las propiedades de un país.",
            tableItems: [
                {
                    id: "id",
                    type: "number",
                    required: true,
                    default: "N/A",
                    description: "ID único del país.",
                },
                {
                    id: "text",
                    type: "string",
                    required: true,
                    default: "N/A",
                    description: "Nombre del país.",
                },
                {
                    id: "code",
                    type: "string",
                    required: true,
                    default: "N/A",
                    description: "Código ISO del país.",
                },
                {
                    id: "img",
                    type: "string (opcional)",
                    required: false,
                    default: "undefined",
                    description: "URL de la imagen representativa del país.",
                },
                {
                    id: "code_phone",
                    type: "string (opcional)",
                    required: false,
                    default: "undefined",
                    description: "Código telefónico del país.",
                },
                {
                    id: "lang",
                    type: "string (opcional)",
                    required: false,
                    default: "undefined",
                    description: "Código idioma del país.",
                },
            ],
        },
        {
            id: "stateProps",
            title: "StateProps",
            description: "Interfaz que define las propiedades de un estado.",
            tableItems: [
                {
                    id: "id",
                    type: "number",
                    required: true,
                    default: "N/A",
                    description: "ID único del estado.",
                },
                {
                    id: "id_country",
                    type: "number",
                    required: true,
                    default: "N/A",
                    description: "ID del país al que pertenece el estado.",
                },
                {
                    id: "text",
                    type: "string",
                    required: true,
                    default: "N/A",
                    description: "Nombre del estado.",
                },
            ],
        },
        {
            id: "cityProps",
            title: "CityProps",
            description: "Interfaz que define las propiedades de una ciudad.",
            tableItems: [
                {
                    id: "id",
                    type: "number",
                    required: true,
                    default: "N/A",
                    description: "ID único de la ciudad.",
                },
                {
                    id: "id_state",
                    type: "number",
                    required: true,
                    default: "N/A",
                    description: "ID del estado al que pertenece la ciudad.",
                },
                {
                    id: "id_country",
                    type: "number",
                    required: true,
                    default: "N/A",
                    description: "ID del país al que pertenece la ciudad.",
                },
                {
                    id: "text",
                    type: "string",
                    required: true,
                    default: "N/A",
                    description: "Nombre de la ciudad.",
                },
                {
                    id: "nameAve",
                    type: "string (opcional)",
                    required: false,
                    default: "undefined",
                    description: "Nombre de la avenida principal de la ciudad.",
                },
            ],
        },
        {
            id: "cscStringProps",
            title: "CSCStringProps",
            description:
                "Interfaz alternativa que define los valores de país, estado y ciudad como cadenas de texto.",
            tableItems: [
                {
                    id: "country",
                    type: "string (opcional)",
                    required: false,
                    default: "undefined",
                    description: "Nombre del país en formato de texto.",
                },
                {
                    id: "state",
                    type: "string (opcional)",
                    required: false,
                    default: "undefined",
                    description: "Nombre del estado en formato de texto.",
                },
                {
                    id: "city",
                    type: "string (opcional)",
                    required: false,
                    default: "undefined",
                    description: "Nombre de la ciudad en formato de texto.",
                },
            ],
        },
    ],
};

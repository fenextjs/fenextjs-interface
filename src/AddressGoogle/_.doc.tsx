export default {
    id: "addressGoogle",
    name: "AddressGoogle",
    description:
        "Interfaz que representa una dirección en el sistema de Google Maps.",
    props: [
        {
            id: "address_components",
            type: "GeocoderAddressComponent[] (opcional)",
            required: false,
            default: "undefined",
            description: "Componentes de la dirección en formato estructurado.",
        },
        {
            id: "adr_address",
            type: "string (opcional)",
            required: false,
            default: "undefined",
            description: "Representación de la dirección en formato ADR.",
        },
        {
            id: "aspects",
            type: "PlaceAspectRating[] (opcional)",
            required: false,
            default: "undefined",
            description:
                "Aspectos específicos del lugar, cada uno con su propia valoración.",
        },
        {
            id: "business_status",
            type: "BusinessStatus (opcional)",
            required: false,
            default: "undefined",
            description:
                "Estado de operación del negocio (abierto, cerrado temporalmente, etc.).",
        },
        {
            id: "lat",
            type: "number (opcional)",
            required: false,
            default: "undefined",
            description: "Latitud de la ubicación.",
        },
        {
            id: "lng",
            type: "number (opcional)",
            required: false,
            default: "undefined",
            description: "Longitud de la ubicación.",
        },
        {
            id: "formatted_address",
            type: "string (opcional)",
            required: false,
            default: "undefined",
            description: "Dirección en formato legible para el usuario.",
        },
        // Se documentan los demás campos de la misma manera...
    ],
    extras: [
        {
            id: "GeocoderAddressComponent",
            title: "GeocoderAddressComponent",
            description:
                "Interfaz para componentes de una dirección en el sistema de geocodificación.",
            tableItems: [
                {
                    key: "long_name",
                    value: "string",
                    description: "Nombre completo del componente de dirección.",
                },
                {
                    key: "short_name",
                    value: "string",
                    description:
                        "Nombre abreviado del componente de dirección.",
                },
                {
                    key: "types",
                    value: "string[]",
                    description: "Tipos de este componente de dirección.",
                },
            ],
        },
        {
            id: "PlaceAspectRating",
            title: "PlaceAspectRating",
            description:
                "Interfaz para clasificaciones de aspectos de un lugar.",
            tableItems: [
                {
                    key: "rating",
                    value: "number",
                    description: "Puntuación asignada al aspecto evaluado.",
                },
                {
                    key: "type",
                    value: "string",
                    description: "Tipo de aspecto evaluado.",
                },
            ],
        },
        {
            id: "BusinessStatus",
            title: "BusinessStatus",
            description:
                "Enum que define los diferentes estados de operación de un negocio.",
            tableItems: [
                {
                    key: "CLOSED_PERMANENTLY",
                    value: "'CLOSED_PERMANENTLY'",
                    description: "El negocio está cerrado permanentemente.",
                },
                {
                    key: "CLOSED_TEMPORARILY",
                    value: "'CLOSED_TEMPORARILY'",
                    description: "El negocio está cerrado temporalmente.",
                },
                {
                    key: "OPERATIONAL",
                    value: "'OPERATIONAL'",
                    description: "El negocio está operativo.",
                },
            ],
        },
        // Otros extras como `LatLngLiteral`, `PlacePhoto`, etc., documentados de forma similar.
    ],
};

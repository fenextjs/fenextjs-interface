export default {
    id: "card_enum",
    name: "Card_Enum",
    description: "Enumeración que define los diferentes tipos de tarjetas de crédito y débito reconocidas.",
    extras: [
        {
            id: "card_enum",
            title: "Card_Enum",
            description: "Enumeración que contiene las opciones para los tipos de tarjeta reconocidos.",
            tableItems: [
                {
                    key: "VISA",
                    value: "'VISA'",
                    description: "Tarjeta Visa.",
                },
                {
                    key: "MASTERCARD",
                    value: "'MASTERCARD'",
                    description: "Tarjeta Mastercard.",
                },
                {
                    key: "AMEX",
                    value: "'AMEX'",
                    description: "Tarjeta American Express.",
                },
                {
                    key: "DISCOVER",
                    value: "'DISCOVER'",
                    description: "Tarjeta Discover.",
                },
                {
                    key: "DINERS",
                    value: "'DINERS'",
                    description: "Tarjeta Diners Club.",
                },
                {
                    key: "DINERS_CARTE_BLANCHE",
                    value: "'DINERS_CARTE_BLANCHE'",
                    description: "Tarjeta Diners Club Carte Blanche.",
                },
                {
                    key: "JCB",
                    value: "'JCB'",
                    description: "Tarjeta JCB.",
                },
                {
                    key: "VISA_ELECTRON",
                    value: "'VISA_ELECTRON'",
                    description: "Tarjeta Visa Electron.",
                },
                {
                    key: "OTHER",
                    value: "'OTHER'",
                    description: "Tipo de tarjeta desconocido o no especificado.",
                },
            ],
        },
    ],
};

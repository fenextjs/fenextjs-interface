export default {
    id: "themeProps",
    name: "ThemeProps",
    description: "Define el tipo de tema y una constante que contiene los valores posibles para configurar el tema.",
    props: [],
    extras: [
        {
            id: "themeType",
            title: "ThemeType",
            description: "Tipo que especifica los valores válidos para el tema de la aplicación.",
            tableItems: [
                {
                    key: "light",
                    value: "'light'",
                    description: "Tema claro, adecuado para ambientes luminosos.",
                },
                {
                    key: "dark",
                    value: "'dark'",
                    description: "Tema oscuro, adecuado para ambientes con poca luz.",
                },
                {
                    key: "auto",
                    value: "'auto'",
                    description: "Tema automático que ajusta según la configuración del sistema.",
                },
            ],
        },
        {
            id: "themeConst",
            title: "ThemeConst",
            description: "Constante que contiene los valores posibles para el tema (`ThemeType`).",
            tableItems: [
                {
                    key: "light",
                    value: "'light'",
                    description: "Tema claro, adecuado para ambientes luminosos.",
                },
                {
                    key: "dark",
                    value: "'dark'",
                    description: "Tema oscuro, adecuado para ambientes con poca luz.",
                },
                {
                    key: "auto",
                    value: "'auto'",
                    description: "Tema automático que ajusta según la configuración del sistema.",
                },
            ],
        },
    ],
};

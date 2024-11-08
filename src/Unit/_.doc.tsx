export default {
    id: "unitProps",
    name: "UnitProps",
    description:
        "Enumeraciones que definen las unidades de medida para distancia, peso y volumen.",
    props: [],
    extras: [
        {
            id: "unitDistance",
            title: "Unit_Distance",
            description:
                "Enumeración que define las unidades de medida para distancia.",
            tableItems: [
                { key: "MM", value: "'MM'", description: "Milímetros." },
                { key: "CM", value: "'CM'", description: "Centímetros." },
                { key: "M", value: "'M'", description: "Metros." },
                { key: "IN", value: "'IN'", description: "Pulgadas." },
                { key: "FT", value: "'FT'", description: "Pies." },
            ],
        },
        {
            id: "unitWeight",
            title: "Unit_Weight",
            description:
                "Enumeración que define las unidades de medida para peso.",
            tableItems: [
                { key: "G", value: "'G'", description: "Gramos." },
                { key: "KG", value: "'KG'", description: "Kilogramos." },
                { key: "OZ", value: "'OZ'", description: "Onzas." },
                { key: "LB", value: "'LB'", description: "Libras." },
            ],
        },
        {
            id: "unitVolumen",
            title: "Unit_Volumen",
            description:
                "Enumeración que define las unidades de medida para volumen.",
            tableItems: [
                { key: "ML", value: "'ML'", description: "Mililitros." },
                { key: "L", value: "'L'", description: "Litros." },
                {
                    key: "CC",
                    value: "'CC'",
                    description: "Centímetros cúbicos.",
                },
                {
                    key: "CM3",
                    value: "'CM3'",
                    description: "Centímetros cúbicos.",
                },
                { key: "M3", value: "'M3'", description: "Metros cúbicos." },
                {
                    key: "IN3",
                    value: "'IN3'",
                    description: "Pulgadas cúbicas.",
                },
                { key: "FT3", value: "'FT3'", description: "Pies cúbicos." },
                { key: "GAL", value: "'GAL'", description: "Galones." },
            ],
        },
    ],
};

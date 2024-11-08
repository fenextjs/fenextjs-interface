export default {
    id: "_tProps",
    name: "_TProps",
    description:
        "Interfaz que define propiedades opcionales para el uso de una función personalizada de traducción.",
    props: [
        {
            id: "useT",
            type: "boolean (opcional)",
            required: false,
            default: "undefined",
            description:
                "Indica si se debe utilizar la función de traducción personalizada `_t`.",
        },
        {
            id: "_t",
            type: "_TFunciton (opcional)",
            required: false,
            default: "undefined",
            description:
                "Función de traducción personalizada que recibe un string y devuelve un valor de cualquier tipo.",
        },
    ],
    extras: [
        {
            id: "_tFunciton",
            title: "_TFunciton",
            description:
                "Tipo de función que define una función de traducción personalizada.",
            tableItems: [
                {
                    key: "(d: string) => any",
                    value: "Función",
                    description:
                        "Función que recibe un string y devuelve un valor de cualquier tipo.",
                },
            ],
        },
    ],
};

export default {
    id: "Date",
    name: "Date",
    description: "Tipos de fechas y días de la semana utilizados para la configuración de fechas y calendarios.",
    props: [],
    extras: [
        {
            id: "typeDate",
            title: "TypeDate",
            description: "Tipo que define los valores posibles para configurar una selección de fecha.",
            tableItems: [
                {
                    key: "date",
                    value: "'date'",
                    description: "Permite la selección de una fecha específica.",
                },
                {
                    key: "month",
                    value: "'month'",
                    description: "Permite la selección de un mes específico.",
                },
                {
                    key: "week",
                    value: "'week'",
                    description: "Permite la selección de una semana específica.",
                },
                {
                    key: "time",
                    value: "'time'",
                    description: "Permite la selección de una hora específica.",
                },
            ],
        },
        {
            id: "daysEnum",
            title: "DaysEnum",
            description: "Enumeración que define los días de la semana.",
            tableItems: [
                {
                    key: "Monday",
                    value: "'Monday'",
                    description: "Representa el día lunes.",
                },
                {
                    key: "Tuesday",
                    value: "'Tuesday'",
                    description: "Representa el día martes.",
                },
                {
                    key: "Wednesday",
                    value: "'Wednesday'",
                    description: "Representa el día miércoles.",
                },
                {
                    key: "Thursday",
                    value: "'Thursday'",
                    description: "Representa el día jueves.",
                },
                {
                    key: "Friday",
                    value: "'Friday'",
                    description: "Representa el día viernes.",
                },
                {
                    key: "Saturday",
                    value: "'Saturday'",
                    description: "Representa el día sábado.",
                },
                {
                    key: "Sunday",
                    value: "'Sunday'",
                    description: "Representa el día domingo.",
                },
            ],
        },
    ],
};

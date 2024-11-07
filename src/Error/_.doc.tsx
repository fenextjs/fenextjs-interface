export default {
    id: "errorProps",
    name: "ErrorProps",
    description:
        "Interfaz para representar detalles de un error en una aplicación, incluyendo código, mensaje y datos adicionales.",
    properties: [
        {
            id: "code",
            type: "ErrorCode (opcional)",
            required: false,
            default: "undefined",
            description: "Código del error específico, definido en el enumerador `ErrorCode`.",
        },
        {
            id: "message",
            type: "string (opcional)",
            required: false,
            default: "undefined",
            description: "Mensaje descriptivo del error.",
        },
        {
            id: "data",
            type: "D (opcional)",
            required: false,
            default: "undefined",
            description: "Datos adicionales sobre el error, de tipo genérico `D`.",
        },
    ],
    extras: [
        {
            id: "errorCode",
            title: "ErrorCode",
            description: "Enumeración que define los posibles códigos de error en la aplicación.",
            tableItems: [
                {
                    key: "ERROR",
                    value: "'ERROR'",
                    description: "Error general no especificado.",
                },
                {
                    key: "USER_TOKEN_NOT_FOUND",
                    value: "'USER_TOKEN_NOT_FOUND'",
                    description: "No se encontró el token de usuario.",
                },
                {
                    key: "USER_TOKEN_INVALID",
                    value: "'USER_TOKEN_INVALID'",
                    description: "El token de usuario es inválido.",
                },
                {
                    key: "PAGE_NOT_FOUND",
                    value: "'PAGE_NOT_FOUND'",
                    description: "La página solicitada no fue encontrada.",
                },
                {
                    key: "SERVER_ERROR",
                    value: "'SERVER_ERROR'",
                    description: "Error general del servidor.",
                },
                {
                    key: "UNAUTHORIZED",
                    value: "'UNAUTHORIZED'",
                    description: "Usuario no autorizado para realizar esta acción.",
                },
                {
                    key: "FORBIDDEN",
                    value: "'FORBIDDEN'",
                    description: "Acceso denegado a la solicitud.",
                },
                {
                    key: "BAD_REQUEST",
                    value: "'BAD_REQUEST'",
                    description: "La solicitud está mal formada.",
                },
                {
                    key: "TIMEOUT",
                    value: "'TIMEOUT'",
                    description: "La solicitud ha excedido el tiempo de espera.",
                },
                {
                    key: "NETWORK_ERROR",
                    value: "'NETWORK_ERROR'",
                    description: "Error en la red al realizar la solicitud.",
                },
                {
                    key: "DATABASE_ERROR",
                    value: "'DATABASE_ERROR'",
                    description: "Error al interactuar con la base de datos.",
                },
                {
                    key: "FILE_NOT_FOUND",
                    value: "'FILE_NOT_FOUND'",
                    description: "El archivo solicitado no fue encontrado.",
                },
                {
                    key: "METHOD_NOT_ALLOWED",
                    value: "'METHOD_NOT_ALLOWED'",
                    description: "Método HTTP no permitido.",
                },
                {
                    key: "NOT_ACCEPTABLE",
                    value: "'NOT_ACCEPTABLE'",
                    description: "La solicitud no es aceptable.",
                },
                {
                    key: "REQUEST_TIMEOUT",
                    value: "'REQUEST_TIMEOUT'",
                    description: "La solicitud excedió el tiempo de espera.",
                },
                {
                    key: "TOO_MANY_REQUESTS",
                    value: "'TOO_MANY_REQUESTS'",
                    description: "Demasiadas solicitudes en un tiempo corto.",
                },
                {
                    key: "INTERNAL_SERVER_ERROR",
                    value: "'INTERNAL_SERVER_ERROR'",
                    description: "Error interno en el servidor.",
                },
                {
                    key: "NOT_IMPLEMENTED",
                    value: "'NOT_IMPLEMENTED'",
                    description: "Funcionalidad no implementada.",
                },
                {
                    key: "SERVICE_UNAVAILABLE",
                    value: "'SERVICE_UNAVAILABLE'",
                    description: "El servicio no está disponible.",
                },
                {
                    key: "INPUT_INVALID",
                    value: "'INPUT_INVALID'",
                    description: "El valor de entrada es inválido.",
                },
                {
                    key: "INPUT_LENGTH",
                    value: "'INPUT_LENGTH'",
                    description: "La longitud de la entrada no es válida.",
                },
                {
                    key: "INPUT_NOT_EQUAL",
                    value: "'INPUT_NOT_EQUAL'",
                    description: "La entrada no coincide con el valor esperado.",
                },
                {
                    key: "INPUT_REQUIRED",
                    value: "'INPUT_REQUIRED'",
                    description: "Se requiere la entrada.",
                },
                {
                    key: "INPUT_TOO_SHORT",
                    value: "'INPUT_TOO_SHORT'",
                    description: "La entrada es demasiado corta.",
                },
                {
                    key: "INPUT_TOO_LONG",
                    value: "'INPUT_TOO_LONG'",
                    description: "La entrada es demasiado larga.",
                },
                {
                    key: "INPUT_OUT_OF_RANGE",
                    value: "'INPUT_OUT_OF_RANGE'",
                    description: "La entrada está fuera del rango permitido.",
                },
                {
                    key: "INPUT_PATTERN_MISMATCH",
                    value: "'INPUT_PATTERN_MISMATCH'",
                    description: "La entrada no coincide con el patrón requerido.",
                },
                {
                    key: "INPUT_VALUE_TOO_LOW",
                    value: "'INPUT_VALUE_TOO_LOW'",
                    description: "El valor de entrada es demasiado bajo.",
                },
                {
                    key: "INPUT_VALUE_TOO_HIGH",
                    value: "'INPUT_VALUE_TOO_HIGH'",
                    description: "El valor de entrada es demasiado alto.",
                },
                {
                    key: "GOOGLE_KEY_NOT_FOUND",
                    value: "'GOOGLE_KEY_NOT_FOUND'",
                    description: "Clave de Google no encontrada.",
                },
                {
                    key: "GOOGLE_KEY_INVALID",
                    value: "'GOOGLE_KEY_INVALID'",
                    description: "Clave de Google inválida.",
                },
            ],
        },
    ],
};

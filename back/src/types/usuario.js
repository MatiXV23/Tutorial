"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioPost = exports.Usuario = exports.LoginData = void 0;
var typebox_1 = require("@sinclair/typebox");
exports.LoginData = typebox_1.Type.Object({
    email: typebox_1.Type.String({
        description: "Nombre de usuario para el login",
        format: "email"
    }),
    contraseña: typebox_1.Type.String({ description: "Contraseña del usuario" }),
}, {
    examples: [
        { email: "admin@desafio.com", contraseña: "@Admin1" }
    ],
});
exports.Usuario = typebox_1.Type.Object({
    id_usuario: typebox_1.Type.Integer({
        description: "Identificador único del usuario",
    }),
    nombre: typebox_1.Type.String({ description: "Nombre completo del usuario" }),
    email: typebox_1.Type.String({ description: "Correo electrónico del usuario" }),
    is_admin: typebox_1.Type.Boolean({
        description: "Indica si el usuario es administrador",
    }),
}, {
    additionalProperties: false,
    examples: [
        {
            id_usuario: 5,
            nombre: "Juan Perez",
            email: "juan.perez@desafio.com",
            is_admin: false,
        },
    ],
});
exports.UsuarioPost = typebox_1.Type.Object({
    username: typebox_1.Type.String({ description: "Nombre de usuario" }),
    email: typebox_1.Type.String({ description: "Correo electrónico del usuario" }),
    contraseña: typebox_1.Type.String({ description: "Contraseña del usuario" }),
    contraseña2: typebox_1.Type.String({
        description: "Confirmación de la contraseña del usuario",
    }),
}, {
    examples: [
        {
            username: "nuevo1",
            email: "nuevo1@desafio.com",
            contraseña: "@Nuevo1",
            contraseña2: "@Nuevo1",
        },
        {
            username: "nuevo2",
            email: "nuevo2@desafio.com",
            contraseña: "@Nuevo2",
            contraseña2: "@Nuevo2",
        },
        {
            username: "nuevo3",
            email: "nuevo2@desafio.com",
            contraseña: "@Nuevo3",
            contraseña2: "@Nuevo3",
        },
    ],
});

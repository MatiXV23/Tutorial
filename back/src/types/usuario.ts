import { Type, Static } from "@sinclair/typebox";

export const LoginData = Type.Object(
  {
    email: Type.String({ 
      description: "Nombre de usuario para el login",
      format: "email"
    }),
    contraseña: Type.String({ description: "Contraseña del usuario" }),
  },
  {
    examples: [
      { email: "admin@desafio.com", contraseña: "@Admin1" }
    ],
  }
);
export type LoginData = Static<typeof LoginData>;

export const Usuario = Type.Object(
  {
    id_usuario: Type.Integer({
      description: "Identificador único del usuario",
    }),
    nombre: Type.String({ description: "Nombre completo del usuario" }),
    email: Type.String({ description: "Correo electrónico del usuario" }),
    is_admin: Type.Boolean({
      description: "Indica si el usuario es administrador",
    }),
  },
  {
    additionalProperties: false,
    examples: [
      {
        id_usuario: 5,
        nombre: "Juan Perez",
        email: "juan.perez@desafio.com",
        is_admin: false,
      },
    ],
  }
);

export const UsuarioPost = Type.Object(
  {
    username: Type.String({ description: "Nombre de usuario" }),
    email: Type.String({ description: "Correo electrónico del usuario" }),
    contraseña: Type.String({ description: "Contraseña del usuario" }),
    contraseña2: Type.String({
      description: "Confirmación de la contraseña del usuario",
    }),
  },
  {
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
  }
);

export type Usuario = Static<typeof Usuario>;
export type UsuarioPost = Static<typeof UsuarioPost>;

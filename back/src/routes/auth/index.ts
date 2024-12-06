import db from "../../services/db.js";
import { Type } from "@sinclair/typebox";
import { LoginData, Usuario } from "../../types/usuario.js";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const authRoutes: FastifyPluginAsyncTypebox = async (
  fastify,
  opts
): Promise<void> => {
  fastify.post("/", {
    schema: {
      summary: "Hacer login",
      description: "Ruta para loguearse usuando username y contraseña.",
      security: [],
      tags: ["auth"],
      body: LoginData,
      response: {
        200: {
          description: "Datos del usuario dentro del token",
          content: {
            "application/json": {
              schema: Type.Object({
                token: Type.String(),
              }),
            },
          },
        },
      },
    },
    handler: async function (request, reply) {
      const { email, contraseña } = request.body as LoginData;
      const res = await db.query(
        "SELECT U.id_usuario,U.email,U.nombre,U.is_admin FROM usuarios U WHERE email=$1 and contraseña = crypt($2, contraseña);",
        [email, contraseña]
      );
      if (res.rowCount === 0)
        reply.unauthorized("El email o contraseña no es correcto.");
      const usuario: Usuario = res.rows[0];
      console.log({ usuario });
      const token = fastify.jwt.sign(usuario);

      reply.send({ token });
    },
  });

  fastify.get("/", {
    schema: {
      headers: Type.Object(
        {
          authorization: Type.String(),
        },
        { additionalProperties: true }
      ),
      tags: ["auth"],
      response: {
        200: Usuario,
      },
    },
    onRequest: [fastify.verifyToken],
    handler: async (request, reply) => {
      const user = request.user;
      console.log({ user });
      return user;
    },
  });
};

export default authRoutes;

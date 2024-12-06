import fp from "fastify-plugin";
import jwt, { FastifyJWTOptions } from "@fastify/jwt";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { IPFError } from "../errors/index.js";
import { Usuario } from "../types/usuario.js";

if (!process.env.JWT_SECRET)
  throw new IPFError(
    "Tienes que especificar la variable de entorno JWT_SECRET. "
  );

const jwtOptions: FastifyJWTOptions = {
  secret: process.env.JWT_SECRET,
};
export default fp(async (fastify: FastifyInstance) => {
  fastify.register(jwt, jwtOptions);

  fastify.decorate(
    "verifyToken",
    async function (request: FastifyRequest, reply: FastifyReply) {
      console.log("Verificando si es administrador.");
      const usuarioToken = request.user;
      if (!usuarioToken.is_admin)
        throw reply.unauthorized("Tienes que ser admin para hacer eso.");
    }
  );

  fastify.decorate(
    "verifyAdmin",
    async function (request: FastifyRequest, reply: FastifyReply) {
      await request.jwtVerify();
    }
  );

  fastify.addHook(
    "onRequest",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const url: string | undefined = request.routeOptions.url;
      console.log({ url });
      if (url?.startsWith("/docs") || url?.startsWith("/auth")) {
        return; //No valido token para estas rutas.
      }
      await request.jwtVerify();
    }
  );
});

export interface authenticateFunction {
  (request: FastifyRequest, reply: FastifyReply): Promise<void>;
}

// Most importantly, use declaration merging to add the custom property to the Fastify type system
declare module "fastify" {
  interface FastifyInstance {
    verifyAdmin: authenticateFunction;
    verifyToken: authenticateFunction;
  }
}

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: Usuario;
    user: Usuario;
  }
}

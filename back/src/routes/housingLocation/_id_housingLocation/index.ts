import { Type } from "@sinclair/typebox";
import * as housingService from "../../../services/housingLocation.js";
import { HousingLocation } from "../../../types/housingLocation.js"; 
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const housingLocationRoutes: FastifyPluginAsyncTypebox = async (
  fastify,
  opts
):Promise<void> => {
  fastify.get("/", {
    schema: {
      tags: ["housingLocation"],
      params: Type.Pick(HousingLocation, ["id"]),
      summary: "Obtener un usuario por id",
      response: {
        200: {
          description: "Usuario encontrado. ",
          content: {
            "application/json": {
              schema: HousingLocation,
            },
          },
        },
      },
    },
    handler: async function (request, reply) {
      const { id } = request.params;
      return housingService.findById(id);
    },
  });

  fastify.delete("/", {
    schema: {
      tags: ["housingLocation"],
      params: Type.Pick(HousingLocation, ["id"]),
      summary: "Borrar usuario por id",
      description:
        " ## Implementar y validar \n " +
        " - token \n " +
        " - params \n " +
        " - que el usuario que ejecuta es administrador \n " +
        " - está bien que falle si el usuario aún tiene tareas asignadas. \n " +
        " - response. \n ",
      response: {
        204: {
          description: "No content",
        },
      },
    },
    
    handler: async function (request, reply) {
      const { id } = request.params;
      reply.code(204);
      return housingService.deleteById(id);
    },
  });

  fastify.put("/", {
    schema: {
      tags: ["housingLocation"],
      summary: "Actualizar usuario.",
      description:
        " ## Implementar y validar \n " +
        "- token \n " +
        "- No se puede editar la contraseña. \n " +
        "- body. \n " +
        "- params \n " +
        "- response. \n " +
        "- que el usuario que ejecuta es administrador o el mismo usuario a modificar.",

      body: HousingLocation,
      params: Type.Pick(HousingLocation, ["id"]),
      response: {
        200: {
          description: "Usuario actualizado.",
          content: {
            "application/json": {
              schema: HousingLocation,
            },
          },
        },
      },
    },
    handler: async function (request, reply) {
      const location = request.body as HousingLocation;
      return housingService.updateById(location);
    },
  });
};

export default housingLocationRoutes;

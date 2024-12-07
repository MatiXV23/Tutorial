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
      summary: "Obtener un HousingLocation por id",
      security: [],
      response: {
        200: {
          description: "HousingLocation encontrado. ",
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
      summary: "Borrar HousingLocation por id",
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
      summary: "Actualizar HousingLocation.",
      body: HousingLocation,
      params: Type.Pick(HousingLocation, ["id"]),
      response: {
        200: {
          description: "HousingLocation actualizado.",
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

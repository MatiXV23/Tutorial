import { FastifyPluginAsync } from "fastify";
import { Type } from "@sinclair/typebox";
import * as housingService from "../../services/housingLocation.js";
import { HousingLocation, HousingLocationPost } from "../../types/housingLocation.js"; 


const housingLocationRoutes: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.get("/", {
    schema: {
      tags: ["housingLocation"],
      summary: "Obtener todos los housingLocation",
      response: {
        200: {
          description: "Listado de housingLocation. ",
          content: {
            "application/json": {
              schema: Type.Array(HousingLocation),
            },
          },
        },
      },
    },
    handler: async function (request, reply) {
      const all = housingService.findAll();
      console.log(all);
      return all;
    },
  });

  fastify.post("/", {
    schema: {
      body: HousingLocationPost,
      tags: ["housingLocation"],
      summary: "Crear housingLocation.",

      response: {
        201: {
          description: "housingLocation creado.",
          content: {
            "application/json": {
              schema: HousingLocation,
            },
          },
        },
      },
    },
    handler: async function (request, reply) {
      const newLocation = request.body as HousingLocationPost;
      reply.code(201);
      return housingService.create(newLocation);
    },
  });
};

export default housingLocationRoutes;

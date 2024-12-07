import fp from "fastify-plugin";
import cors from "@fastify/cors";
import { FastifyInstance} from "fastify";


export default fp(async (fastify: FastifyInstance) => { 
    await fastify.register(cors, {
        origin: "*",
        allowedHeaders: [
          "Origin",
          "X-Requested-With",
          "Accepted",
          "Content-Type",
          "Authorization",
        ],
        methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
      })
});



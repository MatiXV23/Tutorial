import createError from "@fastify/error";

export const IPFNotFoundError = createError(
  "IPF_NOT_FOUND",
  "No se encontró el elemento buscado. %s",
  404
);

export const IPFBadRequest = createError(
  "IPF_BAD_REQUEST",
  "Bad Request: %s",
  400
);

export const IPFUnauthorizedError = createError(
  "IPF_NOT_AUTHORIZED",
  "No estas autorizado a hacer eso.",
  401
);

export const IPFNotImplementedError = createError(
  "IPF_NOT_IMPLEMENTED",
  "No implementado.",
  501
);

export const IPFError = createError(
  "IPF_INTERNAL_ERROR",
  "ERROR INTERNO. %s",
  500
);

// export const mensajesReemplazables = {};
// mensajesReemplazables["ERR_SOCKET_BAD_PORT"] = { message: "Database service is not available at the moment.", statusCode: 503 };
// mensajesReemplazables["28P01"] = { message: "Database service is not available at the moment.", statusCode: 503 };
// mensajesReemplazables["42P01"] = { message: "Database service is not available at the moment.", statusCode: 503 };
// mensajesReemplazables["ENOTFOUND"] = { message: "Database service is not available at the moment.", statusCode: 503 };

// export class IPFError extends Error {
//     constructor(message = "Something went wrong.") {
//         super(message);
//     }
// }

// export class IPFNotFoundError extends IPFError {
//     constructor(message = "We don't found that element.") {
//         super(message);
//     }
// }

// export class IPFUnauthorizedError extends IPFError {
//     constructor(message = "Unauthorized.") {
//         super(message);
//     }
// }

// export class TODOError extends IPFError {
//     constructor(message = "TODO") {
//         super(message);
//     }
// }

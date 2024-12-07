"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPFError = exports.IPFNotImplementedError = exports.IPFUnauthorizedError = exports.IPFBadRequest = exports.IPFNotFoundError = void 0;
var error_1 = require("@fastify/error");
exports.IPFNotFoundError = (0, error_1.default)("IPF_NOT_FOUND", "No se encontró el elemento buscado. %s", 404);
exports.IPFBadRequest = (0, error_1.default)("IPF_BAD_REQUEST", "Bad Request: %s", 400);
exports.IPFUnauthorizedError = (0, error_1.default)("IPF_NOT_AUTHORIZED", "No estas autorizado a hacer eso.", 401);
exports.IPFNotImplementedError = (0, error_1.default)("IPF_NOT_IMPLEMENTED", "No implementado.", 501);
exports.IPFError = (0, error_1.default)("IPF_INTERNAL_ERROR", "ERROR INTERNO. %s", 500);
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

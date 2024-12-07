"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typebox_1 = require("@sinclair/typebox");
var usuario_js_1 = require("../../../types/usuario.js");
var usuarioService = require("../../../services/usuarios.js");
var usuariosRoutes = function (fastify, opts) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        fastify.get("/", {
            schema: {
                tags: ["usuarios"],
                params: typebox_1.Type.Pick(usuario_js_1.Usuario, ["id_usuario"]),
                summary: "Obtener un usuario por id",
                description: " ## Implementar y validar \n " +
                    " - token \n " +
                    " - params \n " +
                    " - que el usuario que ejecuta es administrador o el propio usuario buscado \n " +
                    " - response. \n ",
                response: {
                    200: {
                        description: "Usuario encontrado. ",
                        content: {
                            "application/json": {
                                schema: usuario_js_1.Usuario,
                            },
                        },
                    },
                },
            },
            handler: function (request, reply) {
                return __awaiter(this, void 0, void 0, function () {
                    var id_usuario;
                    return __generator(this, function (_a) {
                        id_usuario = request.params.id_usuario;
                        return [2 /*return*/, usuarioService.findById(id_usuario)];
                    });
                });
            },
        });
        fastify.delete("/", {
            schema: {
                tags: ["usuarios"],
                params: typebox_1.Type.Pick(usuario_js_1.Usuario, ["id_usuario"]),
                summary: "Borrar usuario por id",
                description: " ## Implementar y validar \n " +
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
            handler: function (request, reply) {
                return __awaiter(this, void 0, void 0, function () {
                    var id_usuario;
                    return __generator(this, function (_a) {
                        id_usuario = request.params.id_usuario;
                        reply.code(204);
                        return [2 /*return*/, usuarioService.deleteById(id_usuario)];
                    });
                });
            },
        });
        fastify.put("/", {
            schema: {
                tags: ["usuarios"],
                summary: "Actualizar usuario.",
                description: " ## Implementar y validar \n " +
                    "- token \n " +
                    "- No se puede editar la contraseña. \n " +
                    "- body. \n " +
                    "- params \n " +
                    "- response. \n " +
                    "- que el usuario que ejecuta es administrador o el mismo usuario a modificar.",
                body: usuario_js_1.Usuario,
                params: typebox_1.Type.Pick(usuario_js_1.Usuario, ["id_usuario"]),
                response: {
                    200: {
                        description: "Usuario actualizado.",
                        content: {
                            "application/json": {
                                schema: usuario_js_1.Usuario,
                            },
                        },
                    },
                },
            },
            handler: function (request, reply) {
                return __awaiter(this, void 0, void 0, function () {
                    var usuario;
                    return __generator(this, function (_a) {
                        usuario = request.body;
                        return [2 /*return*/, usuarioService.updateById(usuario)];
                    });
                });
            },
        });
        return [2 /*return*/];
    });
}); };
exports.default = usuariosRoutes;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const serializer_middleware_1 = require("../middlewares/serializer.middleware");
const serialisers_1 = require("../serialisers");
exports.usersRoutes = (0, express_1.Router)();
exports.usersRoutes.post("/", (0, serializer_middleware_1.serializerMiddleware)(serialisers_1.createUserSerializer), controllers_1.createUserController);
exports.usersRoutes.get("/", controllers_1.listUserController);
// Precisa está autenticado 
exports.usersRoutes.patch("/:user_id/", middlewares_1.verifyAuthTokenMiddleware, (0, serializer_middleware_1.serializerMiddleware)(serialisers_1.updateUserSerializer), middlewares_1.is_superuserMiddleware, controllers_1.updateUserController);
exports.usersRoutes.delete("/:user_id/", middlewares_1.verifyAuthTokenMiddleware, middlewares_1.is_superuserMiddleware, controllers_1.deleteUserController);
exports.usersRoutes.get("/:user_id/", middlewares_1.verifyAuthTokenMiddleware, middlewares_1.is_superuserMiddleware, controllers_1.detailUserController);

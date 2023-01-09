"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const serializer_middleware_1 = require("../middlewares/serializer.middleware");
const serialisers_1 = require("../serialisers");
exports.sessionRoutes = (0, express_1.Router)();
exports.sessionRoutes.post("/login/", (0, serializer_middleware_1.serializerMiddleware)(serialisers_1.sessionLoginSerializer), controllers_1.loginUserController);

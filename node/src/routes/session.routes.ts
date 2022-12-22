import { Router } from "express";
import { loginUserController } from "../controllers";
import { serializerMiddleware } from "../middlewares/serializer.middleware";

export const sessionRoutes = Router();
sessionRoutes.post("", serializerMiddleware, loginUserController)
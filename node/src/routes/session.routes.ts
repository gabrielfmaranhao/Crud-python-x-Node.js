import { Router } from "express";
import { loginUserController } from "../controllers";
import { serializerMiddleware } from "../middlewares/serializer.middleware";
import { sessionLoginSerializer } from "../serialisers";

export const sessionRoutes = Router();
sessionRoutes.post("/login/", loginUserController)
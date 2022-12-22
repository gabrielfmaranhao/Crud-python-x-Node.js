import { Router } from "express";
import { createUserController, deleteUserController, detailUserController, listUserController, updateUserController } from "../controllers";
import { is_superuserMiddleware, verifyAuthTokenMiddleware } from "../middlewares";
import { serializerMiddleware } from "../middlewares/serializer.middleware";

export const usersRoutes = Router();
usersRoutes.post("", serializerMiddleware, createUserController)
usersRoutes.get("", listUserController);
// Precisa está autenticado 
usersRoutes.patch("/:user_id/", verifyAuthTokenMiddleware,serializerMiddleware, is_superuserMiddleware, updateUserController)
usersRoutes.delete("/:user_id/", verifyAuthTokenMiddleware, is_superuserMiddleware, deleteUserController)
usersRoutes.get("/:user_id/", verifyAuthTokenMiddleware, is_superuserMiddleware, detailUserController)
import { sessionRoutes } from "./session.routes";
import { usersRoutes } from "./users.routes";
import { Express } from "express";
const appRoutes = ( app: Express) => {
    app.use("api/users", usersRoutes)
    app.use("api", sessionRoutes)
}

export default appRoutes
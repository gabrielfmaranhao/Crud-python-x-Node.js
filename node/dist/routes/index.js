"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session_routes_1 = require("./session.routes");
const users_routes_1 = require("./users.routes");
const appRoutes = (app) => {
    app.use("/api/users", users_routes_1.usersRoutes);
    app.use("/api/users", session_routes_1.sessionRoutes);
};
exports.default = appRoutes;

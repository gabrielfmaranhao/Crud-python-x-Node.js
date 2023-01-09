"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("dotenv/config");
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: true,
    logging: true,
    synchronize: false,
    entities: process.env.NODE_ENV === "production" ? ["dist/entities/*.js"] : ["src/entities/*.ts"],
    migrations: process.env.NODE_ENV === "production" ? ["dist/migrations*.js"] : ["src/migrations/*.ts"]
});
exports.default = AppDataSource;

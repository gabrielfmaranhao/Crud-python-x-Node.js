"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("dotenv/config");
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: false,
    logging: true,
    synchronize: false,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
});
exports.default = AppDataSource;

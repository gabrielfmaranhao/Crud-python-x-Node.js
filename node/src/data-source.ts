import { DataSource } from "typeorm";
import "dotenv/config"

const AppDataSource = new DataSource({
    type:'postgres',
    username: process.env.POSTGRESS_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB_NAME,
    logging: true,
    synchronize: false,
    entities: process.env.NODE_ENV === "production" ? ["dist/src/entities/*.js"] : ["src/entities/*.ts"],
    migrations: process.env.NODE_ENV === "production" ? ["dist/src/migrations/*.js"] : ["src/migrations/*.ts"],
})

export default AppDataSource    
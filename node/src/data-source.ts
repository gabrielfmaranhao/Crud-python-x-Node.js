import { DataSource } from "typeorm";
import "dotenv/config"

const AppDataSource = new DataSource({
    type:'postgres',
    url: process.env.DATABASE_URL,
    ssl: true,
    logging: true,
    synchronize: false,
    entities: process.env.NODE_ENV === "production" ? ["dist/entities/*.js"] : ["src/entities/*.ts"],
    migrations: process.env.NODE_ENV === "production" ? ["dist/migrations*.js"] : ["src/migrations/*.ts"]
})

export default AppDataSource    
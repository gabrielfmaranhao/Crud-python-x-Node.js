import { DataSource } from "typeorm";
import "dotenv/config"

const AppDataSource = new DataSource({
    type:'postgres',
    url: process.env.DATABASE_URL,
    ssl: false,
    logging: true,
    synchronize: false,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
})

export default AppDataSource    
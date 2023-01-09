import express from 'express';
import { handleErrorMiddleware } from './middlewares';
import appRoutes from './routes';
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors({origin: '*'}))
appRoutes(app)
app.use(handleErrorMiddleware)

export default app
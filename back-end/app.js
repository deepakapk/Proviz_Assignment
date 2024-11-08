import express from "express"
import {config} from "dotenv"
import cors from "cors"
import { dbConnection } from "./databaseConnection/dbConnection.js"
import userrouter from "./router/userRouter.js"
import { errorMiddleware } from "./middleware/errorMiddleware.js"



config({path:"./config/config.env"})
const app = express()

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods:["GET", "POST", "DELETE"],
    credentials:true
}))

app.use(express.json())


app.use("/api/v1/user", userrouter)
dbConnection()

app.use(errorMiddleware)

export default app;


import express from 'express'
import router from './router'
import 'dotenv/config'
import {connectDB} from "./config/db";
import cors from 'cors'
import {corsConfig} from "./config/cors";
connectDB()

const app = express()

// cors
app.use(cors(corsConfig))
app.use(express.json())
app.use('/',router)

export default app
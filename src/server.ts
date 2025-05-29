import express from 'express'
import router from './router'
import 'dotenv/config'

import {connectDB} from "./config/db";

const app = express()
connectDB()
app.use(express.json())
app.use('/',router)

export default app
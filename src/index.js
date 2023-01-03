import  express  from "express";
import { pool } from "../db.js";
import { Port } from "./confing.js";
import cors from 'cors'
import morgan from 'morgan'
import electroRoutes from './routes/electro.routes.js'
import indexRoutes from './routes/index.routes.js'

const app=express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(indexRoutes)
app.use(electroRoutes)
app.listen(3000)

console.log("server", Port)
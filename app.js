import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
// import { CORS_ORIGIN } from '../backend/envData.js'
import dotenv from 'dotenv';
dotenv.config();
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(morgan('common'))
app.use(express.urlencoded({ extended: false }))

app.use(express.json())

// app.use('/static', express.static(__dirname + '/public/temp'))
app.use(express.static("public"))

export { app }
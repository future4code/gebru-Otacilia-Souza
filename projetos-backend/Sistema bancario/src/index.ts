import express, { Request, Response } from "express";
import cors from "cors";

let errorCode: number = 400

const app = express()

app.use(express.json()),
app.use(cors())


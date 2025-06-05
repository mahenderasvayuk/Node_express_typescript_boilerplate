import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"

import routesv1 from './routes/v1';
import mongoConnect from "./db/index";
import { notFoundHanddler } from "./middlewares/middleware.errorHandler"
dotenv.config({});
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({ origin: ['*'] }))
app.use(express.json({ limit: "200mb" }));
app.use('/api/v1', routesv1);
app.use(notFoundHanddler);
(async () => {
    await mongoConnect(process?.env?.MONGODB_CONNECTION_URL);
})()
export default app

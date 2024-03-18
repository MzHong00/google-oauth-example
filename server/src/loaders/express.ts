import express,{ Express } from "express"
import cors from 'cors';

import router from "../api";

export default (app: Express) => {
    app.use(cors())
    app.use(express.json());
    app.use('/api', router);
}
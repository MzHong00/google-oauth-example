import { Router } from "express";
import googleRouter from "./google/googleOauth";

const oauthRouter = Router();

oauthRouter.use('/google', googleRouter);

export default oauthRouter;
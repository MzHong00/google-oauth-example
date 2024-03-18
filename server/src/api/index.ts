import { Router } from "express";
import oauthRouter from "./oauth";

const router = Router();

router.use('/oauth', oauthRouter);

export default router;
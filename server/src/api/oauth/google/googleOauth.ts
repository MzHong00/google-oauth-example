import { Router } from "express";
import { googleForm, googleRedirect } from "../../../services/googleOauth";

const googleRouter: Router = Router();

googleRouter.get('/form', googleForm);
googleRouter.get('/redirect', googleRedirect);

export default googleRouter;
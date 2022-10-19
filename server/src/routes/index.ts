import { routerSerie } from "./serie"
import { Router } from "express"
import * as express from "express"

export const routes: Router = express.Router()
routes.use("/serie", routerSerie)

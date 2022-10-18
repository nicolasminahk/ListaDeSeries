import { routerSerie } from "./serie"
import { Router } from "express"

export const router = Router()

router.use("/serie", routerSerie)
// const routerSerie = require("./serie");

// router.use("/users", routerSerie);

// module.exports = router    
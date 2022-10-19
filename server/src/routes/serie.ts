import * as express from "express"
export const routerSerie = express.Router()

import { SeriesController } from "../controller/serie"

const seriesController = new SeriesController()

routerSerie.get("/:id", seriesController.getOneSeries)
routerSerie.get("/", seriesController.getSeries)
routerSerie.post("/", seriesController.postSeries)
routerSerie.put("/:id", seriesController.putSeries)
routerSerie.delete("/:id", seriesController.deleteSeries)




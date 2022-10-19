import { NextFunction, Request, Response } from "express"
import { title } from "process"
import { SeriesServices } from "../services/serie"
type expressMiddleware = (req: Request, res: Response, next: NextFunction) => void



export class SeriesController {
  private servicesSeries = new SeriesServices()

  postSeries: expressMiddleware = async (req, res, next) => {
    const result = await this.servicesSeries.postSeries(req.body)
    return res.send({ data: result, error: false });
  }
  getSeries: expressMiddleware = async (req, res, next) => {
    const result = await this.servicesSeries.getSeries()
    res.send({ data: result, error: false });
  }

  getOneSeries: expressMiddleware = async (req, res, next) => {
    const result = await this.servicesSeries.getOneSeries(req.params.id)
    res.send({ data: result, error: false });
  }
  putSeries: expressMiddleware = async (req, res, next) => {
    const result = await this.servicesSeries.putSeries(req.params.id, req.body)
    res.send({ data: result, error: false })
  }

  deleteSeries: expressMiddleware = async (req, res, next) => {
    const result = await this.servicesSeries.deleteSerie(req.params.id)
    res.send({ data: result, error: false })

  }

}








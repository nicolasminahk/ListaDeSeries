import { NextFunction, Request, Response } from "express";

import { SeriesServices } from "../services/serie";

type expressMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export class SeriesController {
  private servicesSeries = new SeriesServices();

  postSeries: expressMiddleware = async (req, res, next) => {
    const { data, error, status } = await this.servicesSeries.postSeries(
      req.body
    );
    res.status(status).send({ data, error });
  };
  getSeries: expressMiddleware = async (req, res, next) => {
    const { data, error, status } = await this.servicesSeries.getSeries();
    res.status(status).send({ data, error });
  };
  getOneSeries: expressMiddleware = async (req, res, next) => {
    const { data, error, status } = await this.servicesSeries.getOneSeries(
      req.params.id
    );
    res.status(status).send({ data, error });
  };
  putSeries: expressMiddleware = async (req, res, next) => {
    const { data, error, status } = await this.servicesSeries.putSeries(
      req.params.id,
      req.body
    );
    res.status(status).send({ data, error });
  };
  deleteSeries: expressMiddleware = async (req, res, next) => {
    const { data, error, status } = await this.servicesSeries.deleteSerie(
      req.params.id
    );
    res.status(status).send({ data, error });
  };
}

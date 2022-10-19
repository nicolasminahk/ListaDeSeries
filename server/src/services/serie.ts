import { NextFunction, Request, Response } from "express"
import { Serie } from "../entity/Series.entity"
import { AppDataSource } from "../data-source"


interface Services {
    data: any,
    error: boolean,
    status: number
}

export class SeriesServices {

    private repository = AppDataSource.getRepository(Serie)

    async postSeries(body: any): Promise<Services> {
        try {
            const serie = this.repository.create(body)

            const results = await this.repository.save(serie)
            return { data: results, error: false, status: 201 }
        } catch (error) {
            return { data: error, error: true, status: 500 }
        }
    }
    async getSeries(): Promise<Services> {
        try {
            const result = await this.repository.find()
            return { data: result, error: false, status: 200 }
        } catch (error) {
            return { data: error, error: true, status: 500 }
        }
    }
    async getOneSeries(id: string): Promise<Services> {
        try {
            const result = await this.repository.findOneBy({ id })
            return { data: result, error: false, status: 200 }
        } catch (error) {
            return { data: error, error: true, status: 500 }
        }
    }
    async putSeries(id: string, body: any): Promise<Services> {
        try {
            const result = await this.repository.findOneBy({ id })
            const change = await this.repository.save(body)
            return { data: change, error: false, status: 200 }
        } catch (error) {
            return { data: error, error: true, status: 500 }
        }
    }

    async deleteSerie(id: string): Promise<Services> {
        try {
            const result = await this.repository.findOneBy({ id })
            const delet = await this.repository.remove(result)
            return { data: delet, error: false, status: 200 }
        } catch (error) {
            return { data: error, error: true, status: 500 }
        }
    }

}
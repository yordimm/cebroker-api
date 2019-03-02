import { Request, Response } from 'express'
import { Services } from '../services/providers'

export const Controller = {

    findProviders: async (req: Request, res: Response) => {
        const data = await Services.findProviders(req.query)
        res.send(data)
    },
    createProvider: async (req: Request, res: Response) => {
        const data = await Services.createProvider(req.body)
        res.send(data)
    },
    updateProvider: async (req: Request, res: Response) => {
        const data = await Services.updateProvider(req.query._id, req.body)
        res.send(data)
    },
    deleteProvider: async (req: Request, res: Response) => {
        const data = await Services.deleteProvider(req.query._id)
        res.send(data)
    }
}
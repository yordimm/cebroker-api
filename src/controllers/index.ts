import { Request, Response } from 'express'

export const Controller = {

    findProviders: async (req: Request, res: Response) => {
        const data = 'Call findProviders Service'
        res.send(data)
    },
    createProvider: async (req: Request, res: Response) => {
        const data = 'Calll createProvider Service'
        res.send(data)
    },
    updateProvider: async (req: Request, res: Response) => {
        const data = 'Call updateProviders Service'
        res.send(data)
    },
    deleteProvider: async (req: Request, res: Response) => {
        const data = 'Call deletePRovider Service'
    }
}
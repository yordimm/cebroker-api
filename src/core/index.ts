import config from 'config'
import express, { Request, Response, Router } from 'express'
import http from 'http'

export abstract class InfraWeb {
    private server: any
    public app: any
    constructor() {
        this.app = express()
    }
    public use(middlewares: any): void {
        Object.keys(middlewares).forEach((key) => {
            this.app.use(middlewares[key].mountPoint, middlewares[key].handler)
        })
    }

    public mountRoutes(routes: any): void {
        Object.keys(routes).forEach((key) => {
            this.app[routes[key].verb](routes[key].mountPoint, routes[key].handler)
        })
     }

    public listen() {
        const port: number = 3200
        this.server = http.createServer(this.app)
        this.server.listen(port, () => { console.log(`Server running at ${port}`) })
    }

}
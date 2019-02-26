import { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import config from 'config'

const port = config.get('server.port')

export const middlewareServer: { [index: string]: any } = {
    cors: {
        mountPoint: '',
        handler: cors()
    },
    urlencodedParser: {
        mountPoint: '',
        handler: bodyParser.urlencoded({ extended: false })
    },
    jsonParser: {
        mountPoint: '',
        handler: bodyParser.json()
    }
}
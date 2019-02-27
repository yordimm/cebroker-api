import { InfraWeb } from './core/index'
import { middlewareServer } from './middleware'
import { routesServer } from './routes'
import { connection } from './connection'

export default class Server extends InfraWeb {
    constructor() {
        super()
        connection()
        this.use(middlewareServer)
        this.mountRoutes(routesServer)
    }
    public static bootstrap(): Server {
        return new Server()
    }
}

Server.bootstrap().listen()
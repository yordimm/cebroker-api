import { Controller } from '../controllers'
export const routesServer = {
    findProvider: {
        verb: 'get',
        mountPoint: '/',
        handler: Controller.findProviders
    },
    createProvider: {
        verb: 'post',
        mountPoint: '/provider',
        handler: Controller.createProvider
    },
    updateProvider: {
        verb: 'patch',
        mountPoint: '/provider',
        handler: Controller.updateProvider
    },
    deleteProvider: {
        verb: 'delete',
        mountPoint: '/provider',
        handler: Controller.deleteProvider
    }
}
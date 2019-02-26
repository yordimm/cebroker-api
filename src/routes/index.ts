export const routesServer = {
    findProvider: {
        verb: 'get',
        mountPoint: '/',
        handler: 'findProvider Controller'
    },
    createProvider: {
        verb: 'post',
        mountPoint: '/provider',
        handler: 'createProvider Controller'
    },
    updateProvider: {
        verb: 'patch',
        mountPoint: '/provider',
        handler: 'updateProvider Controller'
    },
    deleteProvider: {
        verb: 'delete',
        mountPoint: '/provider',
        handler: 'DeleteProvider Controller'
    }
}
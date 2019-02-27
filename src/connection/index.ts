import mongoose from 'mongoose'

const user = 'yordi'
const password = 'yordi1'
const url = `mongodb://${user}:${password}@ds153835.mlab.com:53835/evercheck-test-7`

mongoose.set('debug', true)
try {
    mongoose.connect(url)
} catch (err) {
    mongoose.createConnection(url)
}
export const connection = () => {
    mongoose.connection
        .once('open', () => console.log('MongoDB connection success'))
        .on('error', e => {
            throw e
        })
}

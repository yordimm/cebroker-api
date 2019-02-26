import mongoose from 'mongoose'

const user = 'yordi'
const password = 'yordi1'
const url = `mongodb://${user}:${password}@ds153835.mlab.com:53835/evercheck-test-7`

const data = { user: process.env.DB_USER, password: process.env.DB_PASSWORD }
console.log(data)
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

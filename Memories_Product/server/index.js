import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRouter from './routes/posts.js'

const app = express()
dotenv.config()
app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ limit: '30mb', extended: false }))
app.use(cors())

app.use('/posts', postRouter)

app.get('/', (req, res) => {
    res.send('Hello to Memories API')
})

const PORT = process.env.PORT || 5000

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, console.log(`Server running on port ${PORT}`))
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
connectDB()


//Router
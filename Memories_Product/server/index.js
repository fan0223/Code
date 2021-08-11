import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import postRouter from './routes/posts.js'

const app = express()
app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ limit: '30mb', extended: false }))
app.use(cors())

app.use('/posts', postRouter)
const PORT = process.env.PORT || 5000

const connectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb+srv://admin-fan:louie86515@cluster0.rvema.mongodb.net/Memories?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
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
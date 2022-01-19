import express from 'express'
import mongoose from 'mongoose'
import 'express-async-errors'

import { currentUserRouter } from './routes/current-user'
import { signinRouter } from './routes/signin'
import { signupRouter } from './routes/signup'
import { signoutRouter } from './routes/signout'
import { errorHandle } from './middleware/error-handle'
import { NotFoundError } from './errors/not-found-error'

const app = express()
app.use(express.json())

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signupRouter)
app.use(signoutRouter)

app.all('*', async (req, res) => {
  throw new NotFoundError()
})
app.use(errorHandle)


const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth')
    console.log('connected to mongodb')
  } catch (err) {
    console.error(err)
  }
  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!')
  })
}

start()

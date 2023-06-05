import cors from 'cors'
import express, { Application, Request, Response } from 'express'
const app: Application = express()
// const port = 3000

app.use(cors())
// parse
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('working successfully')
})

export default app

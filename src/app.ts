import cors from 'cors'
import express, { Application, Request } from 'express'
const app: Application = express()
// const port = 3000

app.use(cors())
// parse
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: any) => {
  res.send('working successfully')
})

export default app

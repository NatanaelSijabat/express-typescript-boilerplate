import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { API_APP } from './utils/env'
import UserRoutes from './routes/UserRoutes'

class App {
    public app: Application

    constructor() {
        this.app = express()
        this.plugin()
        this.route()
    }

    protected plugin() {
        this.app.use(cors({
            credentials: true,
            origin: API_APP,
            methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
            allowedHeaders: ["Content-Type", "Authorization"]
        }))
        this.app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
        this.app.use(express.urlencoded({
            extended: true
        }))
        this.app.use(express.json())
    }

    protected route(): void {
        this.app.route('/').get((req: Request, res: Response) => {
            res.send("run")
        })

        this.app.use('/api/users',UserRoutes)
    }
}

const app =  new App().app

const port: number = 8000;
app.listen(port, () => {
    console.log("server up " + port);
})
import {} from 'dotenv/config';
import { PORT } from "./config/port.js";
import { connectDB } from "./config/database.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import  indexRoutes  from "./routes/index.routes.js";
import  notesRoutes  from "./routes/notes.routes.js";
import express from "express";
import morgan from "morgan";
const app = express()


//Variables
const __dirname = dirname(fileURLToPath(import.meta.url))


//Settings
app.set('views', join(__dirname,'views'))
app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended: false}))

//Middlewares
app.use(express.static(join(__dirname,'public')))
app.use(morgan('dev'))
app.use(express.json())


//Routes

app.use(indexRoutes)
app.use(notesRoutes)



//Initializing app

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_DB_URL)
        app.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()
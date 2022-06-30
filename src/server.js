import {} from 'dotenv/config';
import { PORT } from "./config/port.js";
import { connectDB } from "./config/database.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { flashMessages } from "./config/flash.js";
import  indexRoutes  from "./routes/index.routes.js";
import  notesRoutes  from "./routes/notes.routes.js";
import  usersRoutes  from "./routes/users.routes.js";
import {notFound} from"./helpers/404.js"
import flash from "connect-flash";
import session from "express-session";
import methodOverride from'method-override'
import express from "express";
import morgan from "morgan";
const app = express()


//Variables
const __dirname = dirname(fileURLToPath(import.meta.url))


//Settings
app.set('views', join(__dirname,'views'))
app.set('view engine' , 'ejs')


//Middlewares
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(join(__dirname,'public')))
app.use(morgan('dev'))
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}))
app.use(flash())


//Global Variables
app.use(flashMessages)




//Routes
app.use(indexRoutes)
app.use(notesRoutes)
app.use(usersRoutes)
app.use(notFound)



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
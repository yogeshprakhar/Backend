import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"

const app = express()

//middleware for connecting backend and frontend
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))
//middleware for accepting limited json
app.use(express.json({limit:"16kb"}))
//middleware for url encoding like (yogesh+prakhar or yogesh % something prakhar)
app.use(express.urlencoded({extended:true,limit:"16kb"}))
// middleware to access static files like images files pdf etc
app.use(express.static("public"))
//to access browser cookie from server or can do CRUD operation on browser cookie from server
app.use(cookieParser())
// (err,req,res,next) if i am using next it means it giving direction to go to the next function (my work is done)

//routes
import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/users",userRouter)
// https://localhost:8000/api/v1/users/register


export {app}
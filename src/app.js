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
import healthcheckRouter from "./routes/healthcheck.routes.js";
import tweetRouter from "./routes/tweet.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import videoRouter from "./routes/video.routes.js";
import commentRouter from "./routes/comment.routes.js";
import likeRouter from "./routes/like.routes.js";
import playlistRouter from "./routes/playlist.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";


//routes declaration
app.use("/healthcheck", healthcheckRouter);
app.use("/users", userRouter);
app.use("/tweets", tweetRouter);
app.use("/subscriptions", subscriptionRouter);
app.use("/videos", videoRouter);
app.use("/comments", commentRouter);
app.use("/likes", likeRouter);
app.use("/playlist", playlistRouter);
app.use("/dashboard", dashboardRouter);


// https://localhost:8000/users/register


export {app}
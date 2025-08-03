import express from "express"
import { chats } from "./data/data.js";
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import chatRoutes from "./routes/chatRoutes.js"
dotenv.config()
const app = express();
app.use(cors()); 
app.use(express.json())
connectDB();


app.use('/api/user',userRoutes)
app.use("/api/chat", chatRoutes);
app.use(notFound);
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(3009,()=>{
    console.log("server started");
})
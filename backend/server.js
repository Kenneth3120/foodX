import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'

// app Config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//db Connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/", (req,res)=>{
    res.send("API Working")
})

app.listen(port,()=> {
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://foodx:8317390275@cluster0.dw4yv.mongodb.net/?
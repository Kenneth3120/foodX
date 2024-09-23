import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app Config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors(
    {
        // origin: ["https://food-x-sc6s.vercel.app"],
        origin: ["https://food-x-front.vercel.app", "https://food-x-admin.vercel.app"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }
))

//db Connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req,res)=>{
    res.send("API Working")
})

app.listen(port,()=> {
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://foodx:8317390275@cluster0.dw4yv.mongodb.net/?
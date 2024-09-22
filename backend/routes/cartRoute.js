import express from "express"
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js";

// router configuration
const cartRouter = express.Router();

//endpoints

cartRouter.post("/add",authMiddleware, addToCart)
cartRouter.post("/remove",authMiddleware, removeFromCart)
cartRouter.post("/get",authMiddleware, getCart)

export default cartRouter;
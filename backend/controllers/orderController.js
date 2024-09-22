import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing a user order from frontend
const placeOrder = async (req, res) => {

    const frontend_url = "http://localhost:5174"
    try {
        // Create a new order
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        });
        await newOrder.save();

        // Clear the user's cart after placing the order
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        // Send the orderId in the response for redirection
        res.json({ success: true, orderId: newOrder._id });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error placing order" });
    }
};

// Fetch user orders for frontend
const userOrders = async (req, res) => {
    try {
        // Find orders for the user based on userId
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error retrieving orders" });
    }
};

//Listing orders for admin
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

//Update status of order
const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true, message:"Order status updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"}) 
    }
}

export { placeOrder, userOrders, listOrders, updateStatus };

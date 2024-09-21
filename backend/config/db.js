import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://foodx:8317390275@cluster0.dw4yv.mongodb.net/foodx').then(() =>console.log("DB Connected"));

}
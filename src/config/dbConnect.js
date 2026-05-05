import mongoose, { mongo } from "mongoose";

async function connectDB() {
    mongoose.connect(process.env.MONGO_URL);
    return mongoose.connection;
}

export default connectDB;
import mongoose from "mongoose";

const connectDB = async (handler) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    }
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connection established");
    } catch (error) {
        console.error("MongoDB connection unsuccessful", error);
        process.exit(0);
    }
    return handler(req, res);
}

export default connectDB;
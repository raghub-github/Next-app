import mongoose from "mongoose";
import { NextResponse } from "next/server";

export default async function db() {
    try {
        if (!mongoose.connections.length || !mongoose.connections[0]?.readyState) {
            await mongoose.connect(process.env.MONGO_URI);
            console.log("MongoDB connection established");
        } else {
            console.log("MongoDB already connected");
        };
    } catch (error) {
        console.error("MongoDB connection failed", error);
        return NextResponse.json({ error: "Internal Server Error" });
    };
};
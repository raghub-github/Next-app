import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: false },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

const users = new mongoose.model('User', userSchema);
module.exports = users;
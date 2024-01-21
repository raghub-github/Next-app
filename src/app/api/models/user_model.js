import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Invalid email format'],
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Invalid phone number format'],
    },
    address: { type: String, required: false },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false,
    },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);

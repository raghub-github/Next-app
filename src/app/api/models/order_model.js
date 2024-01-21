import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true, lowercase: true },
    address: { type: String, required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, // Reference Product model
            qty: { type: Number, required: true, min: 1 },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            size: { type: String, required: true },
            // slug: { type: String, required: true, unique: true },
            color: { type: Array, required: true },
            image: { type: Array, required: true },
            title: { type: String, required: true },
            category: { type: String, required: true },
            company: { type: String, required: true },
            description: { type: String, required: true }
        }
    ],
    amount: { type: Number, required: true },
    paymentStatus: { type: String, required: true, enum: ["pending", "paid", "failed", "refunded"] },
    orderStatus: { type: String, default: "pending", required: true, enum: ["pending", "processing", "shipped", "delivered", "cancelled"] },
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model('Order', orderSchema);
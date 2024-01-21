import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true, lowercase: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, // Reference Product model
            qty: { type: Number, required: true, min: 1 },
            size: { type: String, required: true },
            color: { type: String, required: true },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            // slug: { type: String, required: true, unique: true },
            image: { type: String, required: true },
            title: { type: String, required: true },
            category: { type: String, required: true },
            company: { type: String, required: true },
            description: { type: String, required: true }
        }
    ]
}, { timestamps: true });

export default mongoose.models.Cart || mongoose.model('Cart', cartSchema);
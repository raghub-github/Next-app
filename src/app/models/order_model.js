import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    products: [
        {
            productId: { type: String, required: true },
            name: { type: String, required: true },
            qty: { type: Number, required: true },
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
    paymentStatus: { type: String, required: true },
    orderStatus: { type: String, default: "pending", required: true }
}, { timestamps: true });

mongoose.models = {};
const Orders = new mongoose.model('Order', orderSchema);
export default Orders;
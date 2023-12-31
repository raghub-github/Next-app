import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true},
    price: { type: Number, required: true },
    color: { type: Array, required: true },
    size: { type: Array, required: true },
    image: { type: Array, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    company: { type: String, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

mongoose.models = {};
// const Products = new 
export default mongoose.model('Product', productSchema);
// const Products = new mongoose.model('Product', productSchema);
// export default Products;
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  price: { type: Number, required: true, min: 0 },
  color: { type: [String], required: true },
  size: { type: [String], required: true },
  image: { type: [String], required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  company: { type: String, required: true },
  stock: { type: Number, required: true, min: 0 },
  rating: { type: Number, required: true, min: 0, max: 5 },
  description: { type: String, required: true },
}, { timestamps: true });

// export default mongoose.models.Product || mongoose.model('Product', productSchema);
mongoose.models = {};
export default mongoose.model('Product', productSchema);
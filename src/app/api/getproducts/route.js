import Product from "@/app/api/models/product_model";
import db from "../db/mongoose";
import { NextResponse } from "next/server";

// Get the product list from the Database:
export async function GET(req, res) {
  await db();
  try {
    if (req.method === "GET") {
      const products = await Product.find();
      return NextResponse.json(products);
    } else {
      return NextResponse.json({ error: "Invalid request method" });
    };
  } catch (error) {
    console.error("Error in API handler:", error);
    return NextResponse.json({ error: "Internal Server Error" });
  };
};

// Add the products to the database in a bulk request:
export async function POST(req, res) {
  await db();
  try {
    const payload = await req.json();
    if (req.method === "POST") {
      const productPromises = payload.map(async (item) => {
        let p = new Product({
          name: item.name,
          slug: item.slug,
          price: item.price,
          color: item.color,
          size: item.size,
          image: item.image,
          title: item.title,
          category: item.category,
          company: item.company,
          stock: item.stock,
          rating: item.rating,
          description: item.description,
        });
        return p.save();
      });
      const result = await Promise.all(productPromises);
      return NextResponse.json({ result });
    } else {
      return NextResponse.json({ error: "Invalid request method" });
    };
  } catch (error) {
    console.error("Error in API handler:", error);
    return NextResponse.json({ error: "Internal Server Error", error });
  };
};

// Update products in a bulk request:
// export async function PATCH(req, res) {
//   await db();
//   try {
//     const payload = await req.json();
//     if (req.method === "PATCH") {
//       payload.map(async (item) => {
//         await Product.findByIdAndUpdate(item._id, item);
//       });
//       return NextResponse.json({ success: "true" });
//     } else {
//       return NextResponse.json({ error: "Invalid request method" });
//     };
//   } catch (error) {
//     console.error("Error in API handler:", error);
//     return NextResponse.json({ error: "Internal Server Error", message: error });
//   };
// };
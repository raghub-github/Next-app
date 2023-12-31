import Products from "@/app/models/product_model";
import connectDB from "@/app/middleware/mongoose";
import { NextResponse } from "next/server";


export const handler = async (req, res) => {
    if (req.method === "GET") {
        console.log(process.env.MONGO_URI);
        let product = await Products.find();
        return NextResponse.json('Hello from Next.js!')
    } else {
        return NextResponse.json("error", { status: 400 })
    }

}
// export async function GET(req, res) {
//     let product = await Products.find();
//     return new Response('Hello from Next.js!')
// }
export default connectDB(handler);
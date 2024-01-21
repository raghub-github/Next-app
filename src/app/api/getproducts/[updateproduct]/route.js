import Product from "@/app/api/models/product_model";
import db from "../../db/mongoose";
import { NextResponse } from "next/server";

export async function PATCH(req, content) {
    await db();
    try {
        const payload = await req.json();
        const productID = { _id: content.params.updateproduct };
        if (req.method === "PATCH") {
            const result = await Product.findByIdAndUpdate(productID, payload);
            return NextResponse.json({ result });
        } else {
            return NextResponse.json({ error: "Invalid request method" });
        };
    } catch (error) {
        console.error("Error in API handler:", error);
        return NextResponse.json({ error: "Internal Server Error", message: error });
    };
};

export async function DELETE(req, content) {
    await db();
    try {
        const productID = { _id: content.params.updateproduct };
        if (req.method === "DELETE") {
            const result = await Product.findByIdAndDelete(productID);
            return NextResponse.json({ result });
        } else {
            return NextResponse.json({ error: "Invalid request method" });
        };
    } catch (error) {
        console.error("Error in API handler:", error);
        return NextResponse.json({ error: "Internal Server Error", message: error });
    };
};
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req) {

};

export const config = {
    matcher: ['/api/:path*'],
};

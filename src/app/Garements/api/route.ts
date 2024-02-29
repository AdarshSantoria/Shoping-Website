import { NextResponse } from "next/server";
import Data from "../data";
import connectDB from "@/lib/mongoose";

export async function POST(req: any){
    const {cart} = await req.json();

    try {
        await connectDB();
        await Data.create({
            id: cart[0].id,
            name: cart[0].name,
            image: cart[0].image
        })
        return NextResponse.json({msg: ["Message Sent"]})
    }
    catch (error) {
        console.log(error);
    }
    console.log(cart);

    return NextResponse.json({msg: ["hi!"]})
}
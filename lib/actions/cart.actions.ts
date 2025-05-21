"use server";
import { cookies } from "next/headers";
import { CartItem } from "@/types";
import { formatError } from "../utils";

export async function addItemToCart(data: CartItem) {
    try {
        // Check for cart cookie
        const sessionCartId = (await cookies()).get("sessionCartId")?.value;

        if (!sessionCartId) throw new Error("Cart session not found.");

        // Testing
        console.log({
            "Session Cart Id": sessionCartId
        });

        return {
        success: true,
        message: "Item added to cart."
    }
    } catch (error) {
        return {
            success: false,
            message: formatError(error)
        }
    }

    
}
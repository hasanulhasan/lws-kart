import { cartModel } from "@/models/cart-model";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";


export const POST = async (request) => {
  await dbConnect();
  const { productId, userId } = await request.json();

  const payload = {
    productId: productId,
    userId: userId,
  };

  try {
    await cartModel.create(payload);
    return new NextResponse("Added to cart", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

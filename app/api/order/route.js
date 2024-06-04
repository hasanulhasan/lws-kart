import { orderModel } from "@/models/order-model";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  await dbConnect();
  const data = await request.json();

  try {
    await orderModel.create(data);
    return new NextResponse("Order Created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

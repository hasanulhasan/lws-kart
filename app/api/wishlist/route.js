import { NextResponse } from "next/server";
import { dbConnect } from "@/service/mongo";
import { wishListModel } from "@/models/wishlist-model";

export const somethingFromWithList = 10;

export const POST = async (request) => {
  await dbConnect();
  const { productId, userId } = await request.json();

  const payload = {
    productId: productId,
    userId: userId,
  };

  try {
    await wishListModel.create(payload);
    return new NextResponse("Added to wishList", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

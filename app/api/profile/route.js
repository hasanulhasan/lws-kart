import { profileModel } from "@/models/profile-model";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";


export const PUT = async (request) => {
  await dbConnect();
  const {userId, data} = await request.json();

  // const payload = {
  //   productId: productId,
  //   data: data,
  // };

  console.log(userId, data)

  try {
    // await profileModel.findByIdAndUpdate(payload);
    return new NextResponse("Profile Edited", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

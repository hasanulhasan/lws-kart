// import { NextResponse } from "next/server";

// import mongoose from "mongoose";

// export const POST = async (request) => {
//   const { productId, userId } = await request.json();
//   const something = await request.json();

//   console.log(something);

//   // await dbConnect();

//   // const payload = {
//   //   hotelId: new mongoose.Types.ObjectId(hotelId),
//   //   userId: new mongoose.Types.ObjectId(userId),
//   //   checkin,
//   //   checkout
//   // };

//   // console.log(payload);

//   try {
//     // await bookingModel.create(payload);
//     return new NextResponse("A New Booking has been made", {
//       status: 201,
//     });
//   } catch (err) {
//     return new NextResponse(err.message, {
//       status: 500,
//     });
//   }
// };
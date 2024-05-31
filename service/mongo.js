import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_DATA)
  } catch (error) {
    
  }
}
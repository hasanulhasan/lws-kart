import mongoose, { Schema } from "mongoose";

const wishListSchema = new Schema({
  productId: {
    required: true,
    type: String
  },
  userId: {
    required: true,
    type: String
  }
})

export const wishListModel = mongoose.models.wishlist ?? mongoose.model("wishlist", wishListSchema)
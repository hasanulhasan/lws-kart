import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
  productId: {
    required: true,
    type: String,
  },
  userId: {
    required: true,
    type: String,
  },
});

export const cartModel =
  mongoose.models.cart ?? mongoose.model("cart", cartSchema);

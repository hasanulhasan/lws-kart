import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  orders: {
    required: true,
    type: Array,
  },
  totalCost: {
    required: true,
    type: Number,
  },
});

export const orderModel =
  mongoose.models.order ?? mongoose.model("order", orderSchema);

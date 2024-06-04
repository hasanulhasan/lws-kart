import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema({
  shippingName: {
    required: true,
    type: String,
  },
  shippingAddress: {
    required: true,
    type: String,
  },
  shippingPhone: {
    required: true,
    type: String,
  },
  billingName: {
    required: true,
    type: String,
  },
  billingAddress: {
    required: true,
    type: String,
  },
  billingPhone: {
    required: true,
    type: String,
  },
});

export const profileModel =
  mongoose?.models?.profile ?? mongoose?.model("profile", profileSchema);

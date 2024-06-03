import mongoose, { Schema } from "mongoose"

const productSchema = new Schema({
  title: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  discountPrice: {
    required: true,
    type: Number
  },
  rating: {
    required: true,
    type: Number
  },
  stock: {
    required: true,
    type: Number
  },
  category: {
    required: true,
    type: String
  },
  thumbnail: {
    required: true,
    type: String
  },
  images: {
    required: true,
    type: Array
  }
})

export const productModel = mongoose?.models?.products ?? mongoose?.model("products", productSchema)
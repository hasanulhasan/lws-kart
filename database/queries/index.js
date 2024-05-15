import { productModel } from "@/models/product-model";

export const getAllProducts = async () => {
  const products = await productModel.find({}).lean();
  return products;
};

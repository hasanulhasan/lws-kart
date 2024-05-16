import { productModel } from "@/models/product-model";

export const getAllProducts = async () => {
  const products = await productModel.find().limit(4).lean();
  return products;
};


export const getTrending = async ()=> {
  const products = await productModel.find().sort({rating: -1}).limit(8).lean();
  return products
}


export const getSingleProduct = async (id) => {
  const product = await productModel.findById(id).lean();
  return product;
}

export const getRelatedProduct = async (category) => {
  const product = await productModel.find({category: category}).lean();
  return product;
}
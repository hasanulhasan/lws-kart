import { productModel } from "@/models/product-model";
import { userModel } from "@/models/user-model";
import { replaceMongoIdInObject } from "@/utils/data-util";

export const getSerchedProduct = async (searchTerm) => {
  const products = await productModel.find().lean();

  let filteredProducts = products;
  filteredProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredProducts;
};

export const getAllProducts = async () => {
  const products = await productModel.find().limit(4).lean();
  return products;
};

export const getTrending = async () => {
  const products = await productModel
    .find()
    .sort({ rating: -1 })
    .limit(8)
    .lean();
  return products;
};

export const getSingleProduct = async (id) => {
  const product = await productModel.findById(id).lean();
  return product;
};

export async function getUserByEmail(email) {
  const user = await userModel.find({ email: email }).lean();
  return replaceMongoIdInObject(user[0]);
}

export const getRelatedProduct = async (category) => {
  const product = await productModel.find({ category: category }).lean();
  return product;
};

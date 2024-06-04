"use server";
import { auth } from "@/auth";
import { cartModel } from "@/models/cart-model";
import { productModel } from "@/models/product-model";
import { userModel } from "@/models/user-model";
import { wishListModel } from "@/models/wishlist-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

export const getSerchedProduct = async (searchTerm) => {
  const products = await productModel.find().lean();

  let filteredProducts = products;
  filteredProducts = filteredProducts?.filter((product) =>
    product?.title?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  return replaceMongoIdInArray(filteredProducts);
};

export const getWishListProduct = async (userId) => {
  const products = await wishListModel.find({ userId }).lean();

  let userWishedProduct = [];

  userWishedProduct = await Promise.all(
    products?.map(async (poroduct) => {
      const userWishProduct = await productModel
        .findById(poroduct?.productId)
        .lean();
      return userWishProduct;
    })
  );

  return replaceMongoIdInArray(userWishedProduct);
};

export const getAllProducts = async () => {
  const products = await productModel.find().limit(4).lean();
  return replaceMongoIdInArray(products);
};

export const getTrending = async () => {
  const products = await productModel
    .find()
    .sort({ rating: -1 })
    .limit(8)
    .lean();
  return replaceMongoIdInArray(products);
};

export const getSingleProduct = async (id) => {
  const product = await productModel.findById(id).lean();
  return replaceMongoIdInObject(product);
};

export const getUserByEmail = async(email) => {
  const user = await userModel.find({ email: email }).lean();
  return replaceMongoIdInObject(user[0]);
}

export const getRelatedProduct = async (category) => {
  const products = await productModel.find({ category: category }).lean();
  return replaceMongoIdInArray(products);
};

//client action

export async function getUserCheck() {
  const session = await auth();
  const loggedInUser = await getUserByEmail(session?.user?.email);
  const user = await userModel.find({ email: loggedInUser.email }).lean();
  return replaceMongoIdInObject(user[0]);
}

export const getCartProduct = async () => {
  const session = await auth();
  const loggedInUser = await getUserByEmail(session?.user?.email);
  const products = await cartModel.find({ userId: loggedInUser?.id }).lean();

  let cartProduct = [];

  cartProduct = await Promise.all(
    products?.map(async (poroduct) => {
      const userCartProduct = await productModel
        .findById(poroduct?.productId)
        .lean();
      return userCartProduct;
    })
  );

  return replaceMongoIdInArray(cartProduct);
};
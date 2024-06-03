"use server";
/* eslint-disable @next/next/no-img-element */
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import SingleProduct from "@/componets/Home/SingleProduct";
import ShareSocial from "@/componets/ShareSocial";
import {
  getRelatedProduct,
  getSingleProduct,
  getUserByEmail,
} from "@/database/queries";
import WishBtn from "@/utils/WishBtn";
import { redirect } from "next/navigation";

export default async function page({ params: { id } }) {
  const product = await getSingleProduct(id);
  const relatedProducts = await getRelatedProduct(product?.category);
  const session = await auth();
  const loggedInUser = await getUserByEmail(session?.user?.email);
  
  const handleWishList = async () => {
    "use server"

    if (!session?.user) {
      redirect("/login")
    }

    if (!loggedInUser?.id) {
      console.log("user not found");
    }

    try {
      const res = await fetch(`${process.env.APP_URL}/api/wishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product?.id,
          userId: loggedInUser?.id,
        }),
      });
      
      if(res.status === 201){
        // redirect("/wishlist");
        revalidatePath("/", "layout");
      }
    } catch (error) {
      console.error(error);
    }
  };
 
  

  return (
    <>
      {/* breadcrumb */}
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Product</p>
      </div>
      {/* details */}
      <div className="container grid grid-cols-2 gap-6">
        <div>
          <img
            src="../assets/images/products/product1.jpg"
            alt="product"
            className="w-full"
          />
          <div className="grid grid-cols-5 gap-4 mt-4">
            <img
              src="../assets/images/products/product2.jpg"
              alt="product2"
              className="w-full cursor-pointer border border-primary"
            />
            <img
              src="../assets/images/products/product3.jpg"
              alt="product2"
              className="w-full cursor-pointer border"
            />
            <img
              src="../assets/images/products/product4.jpg"
              alt="product2"
              className="w-full cursor-pointer border"
            />
            <img
              src="../assets/images/products/product5.jpg"
              alt="product2"
              className="w-full cursor-pointer border"
            />
            <img
              src="../assets/images/products/product6.jpg"
              alt="product2"
              className="w-full cursor-pointer border"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            {product.title}
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              {product?.stock === 0 ? (
                <>
                  {" "}
                  <span className="text-red-600">Out Of Stock</span>{" "}
                </>
              ) : (
                <>
                  {" "}
                  <span className="text-green-600">In Stock</span>{" "}
                </>
              )}
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">{product?.brand}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">{product?.category}</span>
            </p>
            {/* <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">BE45VGRT</span>
            </p> */}
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-primary font-semibold">
              ${product?.discountPrice}
            </p>
            <p className="text-base text-gray-400 line-through">
              ${product?.price}
            </p>
          </div>

          <p className="mt-4 text-gray-600">{product?.description}</p>

          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center">
                4
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
          </div>

          <div className="mt-4">
            <ShareSocial />
          </div>
          <div className="mt-2 flex items-center gap-3 border-b border-gray-200 pb-5 pt-5">
            <a
              href="#"
              className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
            >
              <i className="fa-solid fa-bag-shopping"></i> Add to cart
            </a>
            <WishBtn handleWishList={handleWishList} />
          </div>

          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* description */}

      {/* related */}
      <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
          Product details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600">
            <p>{product.description}</p>
            <p>{product.description}</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          Related products
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {relatedProducts?.map((product, i) => (
            <SingleProduct key={i} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

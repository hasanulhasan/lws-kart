/* eslint-disable @next/next/no-img-element */
"use client"
import { useRouter } from "next/navigation";

export default function WishProduct({ wishProduct }) {
  const router = useRouter();
  // console.log(wishProduct)
  
  const handleRoute = (id) => {
    router.push(`/details/${id}`);
  }

  return (
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <img
          src="../assets/images/products/product6.jpg"
          alt="product 6"
          className="w-full"
        />
      </div>
      <div className="w-1/3">
        <h2
          onClick={() => handleRoute(wishProduct?._id)}
          className="text-gray-800 text-xl font-medium uppercase cursor-pointer"
        >
          {wishProduct?.title}
        </h2>
        <p className="text-gray-500 text-sm">
          Availability:
          {wishProduct?.stock === 0 ? (
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
      </div>
      <div className="text-primary text-lg font-semibold">
        ${wishProduct?.discountPrice}
      </div>
      <button className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
        add to cart
      </button>

      <div className="text-gray-600 cursor-pointer hover:text-primary">
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
}

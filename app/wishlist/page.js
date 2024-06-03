/* eslint-disable @next/next/no-img-element */

import { auth } from "@/auth";
import WishProduct from "@/componets/wishlist/WishProduct";
import { getUserByEmail, getWishListProduct } from "@/database/queries";
import { redirect } from "next/navigation";

export default async function WishList() {
  const session = await auth();
  const loggedInUser = await getUserByEmail(session?.user?.email);
  const wishList = await getWishListProduct(loggedInUser?.id);

  if (!session?.user) {
    redirect("/login")
  }


  return (
    <>
      {/* <!-- breadcrumb --> */}
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Profile</p>
      </div>
      {/* <!-- ./breadcrumb --> */}

      {/* <!-- wrapper --> */}
      <div className="container gap-6 pt-4 pb-16">
        {/* <!-- wishlist --> */}
        <div className="mx-auto space-y-4 max-w-6xl">
          {wishList?.length == 0 && (
            <p className="text-center text-lg mt-2">
              You dont have any product in Wish List
            </p>
          )}
          {wishList?.map((wishProduct) => (
            <WishProduct key={wishProduct.id} wishProduct={wishProduct} />
          ))}
        </div>
        {/* <!-- ./wishlist --> */}
      </div>
      {/* <!-- ./wrapper --> */}
    </>
  );
}

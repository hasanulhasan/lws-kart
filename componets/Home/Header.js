/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Search from "../Search";
import { auth } from "@/auth";
import { getUserByEmail, getWishListProduct } from "@/database/queries";

export default async function Header() {
  const session = await auth();
  const loggedInUser = await getUserByEmail(session?.user?.email);
  const wishList = await getWishListProduct(loggedInUser?.id);

  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <img src="/assets/images/logo.svg" alt="Logo" className="w-32" />
        </Link>
        <Search />

        <div className="flex items-center space-x-4">
          <Link
            href="/wishlist"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="text-xs leading-3">Wishlist</div>

            {wishList?.length !== 0 && (
              <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                {wishList?.length}
              </div>
            )}
          </Link>
          <Link
            href="/cart"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
            <div className="text-xs leading-3">Cart</div>

              {/* it will work after cart system implementation */}
            {/* <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              2
            </div> */}

          </Link>
          <Link
            href="/account"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="text-xs leading-3">Account</div>
          </Link>
        </div>
      </div>
    </header>
  );
}

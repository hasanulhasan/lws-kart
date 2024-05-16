/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'

export default function SingleProduct({product}) {
  const { _id, img, title, price, discountPrice } = product;


  return (
    <div class="bg-white shadow rounded overflow-hidden group">

      <div class="relative">
        <img
          src="assets/images/products/product1.jpg"
          alt="product 1"
          class="w-full"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <a
            href="#"
            class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
          <a
            href="#"
            class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <i class="fa-solid fa-heart"></i>
          </a>
        </div>
      </div>
      
      <div class="pt-4 pb-3 px-4">
      <Link href={`/details/${_id}`}>
          <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {title}
          </h4>
          </Link>
        <div class="flex items-baseline mb-1 space-x-2">
          <p class="text-xl text-primary font-semibold">${discountPrice}</p>
          <p class="text-sm text-gray-400 line-through">${price}</p>
        </div>
        <div class="flex items-center">
          <div class="flex gap-1 text-sm text-yellow-400">
            <span>
              <i class="fa-solid fa-star"></i>
            </span>
            <span>
              <i class="fa-solid fa-star"></i>
            </span>
            <span>
              <i class="fa-solid fa-star"></i>
            </span>
            <span>
              <i class="fa-solid fa-star"></i>
            </span>
            <span>
              <i class="fa-solid fa-star"></i>
            </span>
          </div>
          <div class="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      
    
      <button
        class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        Add to cart
      </button>
    </div>
  );
}

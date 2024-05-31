"use client";

export default function WishBtn({ handleWishList }) {
  return (
    <button
      onClick={handleWishList}
      className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
    >
      <i className="fa-solid fa-heart"></i> Wishlist
    </button>
  );
}

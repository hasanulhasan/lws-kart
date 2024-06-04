"use client"

export default function CartBtn({ handleAddToCart }) {
  return (
    <button
      onClick={() => handleAddToCart()}
      className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
    >
      <i className="fa-solid fa-bag-shopping"></i> Add to cart
    </button>
  );
}

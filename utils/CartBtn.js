"use client"

export default function CartBtn({ handleAddToCart, stock }) {
  return (
    <button
      disabled={stock === 0}
      onClick={() => handleAddToCart()}
      className={`border ${stock === 0 ? "bg-gray text-black border-black cursor-not-allowed" : "bg-primary text-white border-primary cursor-pointer"}  px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition`}
    >
      <i className="fa-solid fa-bag-shopping"></i> Add to cart
    </button>
  );
}

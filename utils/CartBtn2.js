'use client'

export default function CartBtn2({ handleAddToCart, stock }) {
  return (
    <button disabled={stock === 0} onClick={()=> handleAddToCart()} className={`block w-full py-1 text-center border border-primary rounded-b hover:bg-transparent hover:text-primary transition ${stock === 0 ? "bg-gray text-black border-black cursor-not-allowed" : "bg-primary text-white border-primary cursor-pointer"}`}>
      Add to cart
    </button>
  );
}

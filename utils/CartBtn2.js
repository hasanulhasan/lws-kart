'use client'

export default function CartBtn2({ handleAddToCart }) {
  return (
    <button onClick={()=> handleAddToCart()} className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
      Add to cart
    </button>
  );
}

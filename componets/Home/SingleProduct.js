/* eslint-disable @next/next/no-img-element */
import { auth } from "@/auth";
import { getUserByEmail } from "@/database/queries";
import CartBtn2 from "@/utils/CartBtn2";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function SingleProduct({ product }) {
  const { id, thumbnail, title, price, discountPrice, stock } = product;
  
  const session = await auth();
  const loggedInUser = await getUserByEmail(session?.user?.email);

  const handleAddToCart = async () => {
    "use server";

    if (!session?.user) {
      redirect("/login");
    }

    if (!loggedInUser?.id) {
      console.log("user not found");
    }

    try {
      const res = await fetch(`${process.env.APP_URL}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: id,
          userId: loggedInUser?.id,
        }),
      });

      if (res.status === 201) {
        revalidatePath("/", "layout");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white shadow rounded overflow-hidden group">
      <Link href={`/details/${id}`}>
      <div className="relative">
        <img
          // src="/assets/images/products/product1.jpg"
          src={thumbnail}
          alt="product 1"
          className="w-full h-32 cursor-pointer"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          {/* <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <i className="fa-solid fa-heart"></i>
          </a> */}
        </div>
      </div>
      </Link>

      <div className="pt-4 pb-3 px-4">
        <Link href={`/details/${id}`}>
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {title}
          </h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">${discountPrice}</p>
          <p className="text-sm text-gray-400 line-through">${price}</p>
        </div>
        <div className="flex items-center">
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
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>

      <CartBtn2 handleAddToCart={handleAddToCart} stock={stock}/>
    </div>
  );
}

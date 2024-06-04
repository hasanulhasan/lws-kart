"use client";
import { careateOrder } from "@/actions";
import ChekckOutForm from "@/componets/Cart/ChekckOutForm";
import OrderItem from "@/componets/Cart/OrderItem";
import { getCartProduct, getUserCheck } from "@/database/queries";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const shippingPrice = 50;

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [fromInfo, setFormInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });

  let priceCount = 0;
  cart?.forEach((cartProduct) => {
    priceCount = priceCount + cartProduct.discountPrice;
  });

  const handleOrder = async () => {
    if(cart?.length === 0){
      toast.error("There should be at least an order");
      return null
    }

    if (!fromInfo?.name || !fromInfo?.phone || !fromInfo?.address) {
      toast.error("Please fill the form correctly");
    } else {
      const orderInfo = {
        name: fromInfo.name,
        phone: fromInfo.phone,
        address: fromInfo.address,
        orders: cart,
        totalCost: Number(priceCount),
      };

      try {
        const resStatus = await careateOrder(orderInfo);
        if (resStatus === 201) {
          toast.success("Order Place Successfull");
          setTimeout(() => {
            router.replace('/')
          }, 2000);
        }
      } catch (error) {
        console.error(error);
      }
    }

  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserCheck();
      if (!user?.email) {
        router.replace('/login')
      }
    };
    fetchUser();
  }, [router]);

  useEffect(() => {
    const fetchCartProduct = async () => {
      const cartProducts = await getCartProduct();
      setCart(cartProducts);
    };
    fetchCartProduct();
  }, []);

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
        <p className="text-gray-600 font-medium">Checkout</p>
      </div>
      {/* <!-- ./breadcrumb --> */}

      {/* <!-- wrapper --> */}
      <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <div className="col-span-8 border border-gray-200 p-4 rounded">
          <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
          <ChekckOutForm fromInfo={fromInfo} setFormInfo={setFormInfo} />
        </div>

        <div className="col-span-4 border border-gray-200 p-4 rounded">
          <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
            order summary
          </h4>
          <div className="space-y-2">
            {cart?.length === 0 && (
              <p className="text-center">There is no order</p>
            )}
            {cart?.map((cartProduct, i) => (
              <OrderItem key={i} cartProduct={cartProduct} />
            ))}
          </div>

          <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
            <p>Subtotal</p>
            <p>${priceCount}</p>
          </div>

          <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
            <p>Shipping</p>
            <p>${shippingPrice}</p>
          </div>

          <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
            <p className="font-semibold">Total</p>
            <p>${priceCount + shippingPrice}</p>
          </div>

          <div className="flex items-center mb-4 mt-2">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
            />
            <label
              htmlFor="aggrement"
              className="text-gray-600 ml-3 cursor-pointer text-sm"
            >
              I agree to the{" "}
              <a href="#" className="text-primary">
                terms & conditions
              </a>
            </label>
          </div>

          <button
            onClick={handleOrder}
            className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
          >
            Place order
          </button>
        </div>
      </div>
      <Toaster />
      {/* <!-- ./wrapper --> */}
    </>
  );
}

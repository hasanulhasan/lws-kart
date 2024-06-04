"use server";
import { signIn } from "@/auth";

export async function login(formData) {
  try {
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
}

export async function careateOrder(orderInfo) {
  try {
    const res = await fetch(`${process.env.APP_URL}/api/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    });

    return res?.status;

  } catch (error) {
    console.log(error.message);
  }
}

export async function addToCart(cartInfo) {
  try {
    const res = await fetch(`${process.env.APP_URL}/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartInfo),
    });

    return res?.status;
  } catch (error) {
    console.log(error.message);
  }
}

export async function editShippingProfile(profileInfo) {
  try {
    const res = await fetch(`${process.env.APP_URL}/api/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileInfo),
    });
    console.log(res)
    return res?.status;
  } catch (error) {
    console.log(error.message);
  }
}


/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { login } from "@/actions";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleAuth = (e) => {
    signIn("google", { callbackUrl: process.env.APP_URL });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const res = await login(formData);
      // console.log(res);
      if (res.err) {
        setError(res?.error?.message);
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-3 text-center">Login</h2>
        {/* <p className="text-gray-600 mb-6 text-sm">welcome back customer</p> */}
        {error && (
          <p className="text-primary my-2 text-center">
            There is an error, {error}
          </p>
        )}
        <form onSubmit={onSubmit} method="post" autocomplete="off">
          <div className="space-y-2">
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="youremail.@domain.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="*******"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-primary">
              Forgot password
            </a>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              Login
            </button>
          </div>
        </form>

        {/* <!-- login with --> */}
        <div className="mt-6 flex justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
            Or login with
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>
        <div className="mt-4 flex gap-4">
          <a
            href="#"
            className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
          >
            facebook
          </a>
          <button
            onClick={handleAuth}
            className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
          >
            google
          </button>
        </div>
        {/* <!-- ./login with --> */}

        <p className="mt-4 text-center text-gray-600">
          Don't have account?{" "}
          <Link href="/register" className="text-primary">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
}

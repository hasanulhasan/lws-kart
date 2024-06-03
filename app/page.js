import Ad from "@/componets/Home/Ad";
import Banner from "@/componets/Home/Banner";
import Categories from "@/componets/Home/Categories";
import Features from "@/componets/Home/Features";
import NewArrival from "@/componets/Home/NewArrival";
import TrendingProducts from "@/componets/Home/TrendingProducts";
import { getAllProducts, getSingleProduct, getTrending } from "@/database/queries";

export default async function Home() {
  const products = await getAllProducts();
  const trendingProducts = await getTrending();
  

  return (
    <>
      {/* <Banner /> */}
      {/* <Features /> */}
      {/* <Categories /> */}
      <NewArrival products={products}/>
      <Ad />
      <TrendingProducts trendingProducts={trendingProducts} />
    </>
  );
}

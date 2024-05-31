/* eslint-disable @next/next/no-img-element */
import SingleProduct from "./SingleProduct";

export default function NewArrival({ products }) {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <SingleProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default function OrderItem({ cartProduct }) {
  return (
    <div className="flex justify-between">
      <div>
        <h5 className="text-gray-800 font-medium">{cartProduct?.title}</h5>
        <p className="text-sm text-gray-600">{cartProduct?.brand}</p>
      </div>
      {/* <p className="text-gray-600">x3</p> */}
      <p className="text-gray-800 font-medium">${cartProduct?.discountPrice}</p>
    </div>
  );
}

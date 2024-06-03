import React from 'react'

export default function OrderItem() {
  return (
    <div className="flex justify-between">
      <div>
        <h5 className="text-gray-800 font-medium">Italian shape sofa</h5>
        <p className="text-sm text-gray-600">Size: M</p>
      </div>
      <p className="text-gray-600">x3</p>
      <p className="text-gray-800 font-medium">$320</p>
    </div>
  );
}

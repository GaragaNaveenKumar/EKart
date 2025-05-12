import React from "react";
import { products } from "../Data/Products";
import '../App.css'

const ProductsDisplay = () => {
  return (
    <div className="bg-white py-6 px-4">
      <div className="relative top-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-sm mx-auto p-4 border border-gray-200 rounded shadow-md flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mb-4"
            />
            <div className="text-center">
              <h4 className="mt-2 font-semibold text-lg">{product.title}</h4>
              <p className="text-green-500 font-bold">{`$${product.price}`}</p>
              <p className="mt-2 font-semibold text-md">rating : <strong>{ product.rating.rate}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProductsDisplay

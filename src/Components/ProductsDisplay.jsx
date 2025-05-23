import React from "react";
import { products } from "../Data/Products";
import "../App.css";
import {useCart} from "./CartContext.jsx";
import { useNavigate } from "react-router";

const ProductsDisplay = () => {
  const { dispatch } = useCart();
  const navigate=useNavigate();

  const addToCart = (product) => {
    console.log(product)
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const goToProduct=(id)=>{
    navigate(`/product?id=${id}`);

  }

  return (
    <div className="bg-white py-6 px-4">
      <div className="relative inset top-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-sm mx-auto p-4 border border-gray-200 rounded shadow-md flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mb-4"
              onClick={()=>goToProduct(product.id)}
            />
            <div className="text-center">
              <h4 className="mt-2 font-semibold text-lg">{product.title}</h4>
              <p className="text-green-500 font-bold">{`$${product.price}`}</p>
              <p className="mt-2 font-semibold text-md">
                rating : <strong>{product.rating.rate}</strong>
              </p>
            </div>
            <button
              className=" bg-blue-400 hover:bg-blue-700 text-black font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300 ease-in-out"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;
